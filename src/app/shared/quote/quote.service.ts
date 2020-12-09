import { Injectable } from '@angular/core';
import { LeadService } from '../lead.service';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  formData : Quote;

  constructor( public leadService : LeadService,
    public quoteService : QuoteService) { }

    
}
