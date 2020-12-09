import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LeadService } from '../shared/lead.service';
import { Leaddetails } from '../shared/leaddeatils/leaddetails.model';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {
  filetoUpload : File = null;
  imageUrl : string = "/assets/default.png";
  leadDetails: Observable<Leaddetails[]>;

  constructor(public service : LeadService,
    public router : Router,
    public toastr : ToastrService,) { }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{ 
        this.leadDetails = this.service.getLeadDetailsList(parseInt(localStorage.getItem("LEAD_ID")));
      }
    }

    ReturnToLeadDetails(LEAD_ID: number){
      this.router.navigate(['/lead/edit/'+ LEAD_ID]);
    }

    finalizeLead(LEAD_ID, PICTURE){
      this.service.leadFinalized(LEAD_ID);
      this.service.postContract(LEAD_ID, PICTURE);
      this.toastr.success('Contract Finalized Successfully.', 'DealLeader.');
      this.router.navigate(['/lead/edit/'+ LEAD_ID]);
    }

    handleFileInput(file : FileList){
      this.filetoUpload = file.item(0);
      console.log(this.filetoUpload);
  
      //show image preview 
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.filetoUpload);
    }

}
