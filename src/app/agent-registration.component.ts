import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/shared/country.model';
import { Agenttype } from 'src/app/shared/agenttype.model';
import { Title } from 'src/app/shared/title.model';
import { Agentstatus } from "src/app/shared/agentstatus.model";
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AgenttypeService } from 'src/app/shared/agenttype.service';
import { User } from 'src/app/shared/user/user.model';
import { TitleService } from 'src/app/shared/title.service';
import { CountryService } from 'src/app/shared/country.service';
import { AgentstatusService } from 'src/app/shared/agentstatus.service';
import { UserService } from 'src/app/shared/user/user.service';
import { AgentService } from 'src/app/shared/agent.service';
import { AgentRegHelpComponent } from './agent-reg-help/agent-reg-help.component';
import { Agent } from './shared/agent.model';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';




@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  formData: User;
  countryList: Country[];
  agenttypeList: Agenttype[];
  titleList: Title[];
  agentstatusList: Agentstatus[];
  fileToUpload : File = null;
  imageUrl : string = '';
  USERNAME: string;
  PASSWORD: string;
  SearchCountry
  public obj: any = {};
  isUploaded = false;
  //file: Agent[];
  shortLink: string = "";
  loading: boolean = false;
  file: File = null; 
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  uploadResults: any;
  res: Array<string>;
  public isLoadingData: Boolean = false;
  errorMessage: string;
  fileSelected: string;



  @ViewChild("fileUpload") fileUploadVar:any ;
  files:[];


  constructor(public service: AgentService,
    public countryService: CountryService,
    public agenttypeService: AgenttypeService,
    public titleService: TitleService,
    public agentstatusService: AgentstatusService,
    public userService : UserService,
    public dialog: MatDialog,
    public toastr : ToastrService) { }

  ngOnInit(): void{
    this.resetForm();
    this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
    this.agenttypeService.getAgenttypeList().then(res => this.agenttypeList = res as Agenttype[]);
    this.titleService.getTitleList().then(res => this.titleList = res as Title[]);
    this.agentstatusService.getAgentstatusList().then(res => this.agentstatusList = res as Agentstatus[]);
    
  }

  resetForm(form?:NgForm){
    if (form != null)
    form.resetForm();
    this.userService.formData= {
      AGENT_ID: null,
      AGENT_STATUS_ID: 1,
      AGENT_TYPE_ID: null,
      COUNTRY_ID: null,
      TITLE_ID: null,
      AGENT_NAME: '',
      AGENT_SURNAME: '',
      AGENT_ID_NO: '',
      AGENT_PASSPORT_NO: '',
      AGENT_COMPANY_NAME: '',
      AGENT_COMPANY_REGISTRATION: '',
      AGENT_CONTACT_NO: '',
      AGENT_EMAIL_ADDRESS: '',
      USER_ID : null,
      USERNAME : '',
      PASSWORD : '',
      USER_ROLE_ID : 2,
      // nda : null,
      postedFile :  null,
      fileName: "",
    }
  }

onSubmit(form:NgForm, e){

  this.USERNAME = e.target.USERNAME.value;
  this.PASSWORD = e.target.PASSWORD.value;
  sessionStorage["USERNAME"] = this.USERNAME;
  sessionStorage["PASSWORD"] = this.PASSWORD;

this.insertUser(form)
this.insertLogin(form)


// this.insertAgent(form)
}

// insertAgent(form:NgForm){
//   this.service.saveAgent(form.value).subscribe(res => {
//     this.resetForm(form)
//   })
// }

insertUser(form: NgForm){
  this.USERNAME = sessionStorage["USERNAME"];
  this.PASSWORD = sessionStorage["PASSWORD"];
  console.log(form.value)
  this.userService.saveUser(form.value).subscribe(res => {
    this.toastr.success("Your details have been successfully submitted. Please await a SMS stating acceptance or decline.", 'DealLeader Group');
    this.resetForm(form);
  })
}

insertLogin(form: NgForm){
  this.userService.saveLogin(form.value).subscribe(res => {
    this.resetForm(form);
  })
}


openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(AgentRegHelpComponent, dialogConfig);
}

handleFileInput(file ){
  let formData = new FormData();
  for (let i = 0; i < file.length; i++){
    formData.append('file', file[i], file[i]['name']);
  }

  //show image preview 
  var reader = new FileReader();
  // reader.onload = (event: any) => {
  //   this.imageUrl = event.target.result;
  // }
  // reader.readAsDataURL(this.fileToUpload);
}

handleFile(event ){
  // let formData = new FormData();
  // for (let i = 0; i < file.length; i++){
  //   formData.append('file', file[i], file[i]['name']);
  // }

  this.file= event.target.files[0];
console.log(this.file);



 

//   //show image preview 
//   var reader = new FileReader();
//   // reader.onload = (event: any) => {
//   //   this.imageUrl = event.target.result;
//   // }
//   reader.readAsDataURL(this.fileToUpload);
 }

 onFileSelect(input){
  if (input.files && input.files[0])
  {
    var reader = new FileReader();
    reader.onload = (e: any) => {
      this.obj.file = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }

}

//upload(event){

// this.file= event.target.files[0];
// console.log(this.file);



  // this.service.uploadFile(this.obj.file).subscribe(d => {
  //   if (d==null){
  //     console.log(d);
  //   }
  //   else
  //   {
  //      this.isUploaded = true;
  //      this.obj.file = ''
  //   }

  //   })
  //   confirm('File Successfully Uploaded')

//   onChange(event){
//     this.file = event.target.files[0];
//     //ocument.getElementById("file-id").files[0].name;
//   }

//  onUpload(){
//    this.loading = !this.loading;
//    console.log(this.file);

//    this.service.upload(this.file).subscribe(
//      (event: any) => {
//        if (typeof(event) === 'object'){
//          this.shortLink = event.link;
//          this.loading = false;
//        }
//      }
//    )
//  }

// uploadFile(){
//   this.uploadResult = "";
//   if(this.filesToUpload.length > 0)
//   {
//     this.isLoadingData = true;
//     let formData: FormData = new FormData();
    
//     for (var i = 0; i < this.filesToUpload.length; i++)
//     {
//        formData.append('uploadedFiles', this.filesToUpload[i], this.filesToUpload[i].name);
//     }

//     let apiURL= "https://localhost:44377/api/Agent";
    
//     this.http.post(apiURL, formData).map((res: Response) => res.json()).subscribe(
//       data => {
//         this.uploadResults = data;
//         this.errorMessage = "";
//       },
//       err => {
//         this.errorMessage = "Error";
//       },
//       () => {
//         this.isLoadingData = false;
//         this.fileUploadVar.nativeElement.value = "";
//         this.selectedFileNames = [];
//         this.filesToUpload = [];
//       }
//     )

//   }
// }

// cancelUpload(){
//   this.filesToUpload = [];
//   this.fileUploadVar.nativeElement.value = "";
//   this.selectedFileNames = [];
//   this.uploadResults = "";
//   this.errorMessage= "";
// }

// validatePDF(fileSelected: string[]){
//   for(var i = 0; i < fileSelected.length; i++)
//   {
//     if(fileSelected[i].slice(-3).toUpperCase() != "PDF")
//     {
//       alert('');
//       return false;
//     }
//     else{
//       return true;
//     }
//   }
// }

// }



// uploadFile(file: File[]) {
//   const formData = new FormData();  
//   formData.append('file', file);  
//   file.inProgress = true;
//   this.service.upload(formData).pipe(
 
//    ),  
//    catchError((error: HttpErrorResponse) => {
//     file.inProgress = false;
//    return of(`Upload failed: ${file.data.name}`);
//     });
     
    
//   }


// onClick(file) {
// const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {
// for (let index = 0; index < fileUpload.files.length; index++)
// {const file = fileUpload.files[index];
// //this.files.push({ data: file, inProgress: false, progress: 0});
// }
// this.uploadFile(file);
// };
// fileUpload.click();

// }

}
