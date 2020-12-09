import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieService } from "ngx-cookie-service";
import { AgentRegistrationComponent } from './agent-registration.component';
import { AgentService } from "./shared/agent.service";
import { LoginuserService } from "./shared/loginuser/loginuser.service";
import { UserService } from './shared/user/user.service';
import { LeadService } from './shared/lead.service';
import { ProfileComponent } from './profile/profile.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './leads/lead/lead.component';
import { LeadItemsComponent } from './leads/lead-items/lead-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LeadDetailsComponent } from './leads/lead-details/lead-details.component';
import { SignUpComponent } from "./login/sign-up/sign-up.component";
import { LoginComponent } from './login/login.component';
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { AuthGuard } from "./auth/auth.guard";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionComponent } from './commissions/commission/commission.component';
import { CommissionListComponent } from './commissions/commission-list/commission-list.component';
import { QuoteComponent } from './quote/quote.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { Supplier1Component } from './suppliers/supplier1/supplier1.component';
import { AgenttypesComponent } from './agenttypes/agenttypes.component';
import { AgenttypeComponent } from './agentypes/agenttype/agenttype.component';
import { AgenttypeListComponent } from './agenttypes/agenttype-list/agenttype-list.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { EmployeeTypesComponent } from './employee-types/employee-types.component';
import { EmployeeTypeComponent } from './employee-types/employee-type/employee-type.component';
import { EmployeeTypeListComponent } from './employee-types/employee-type-list/employee-type-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { MeetingtypesComponent } from './meetingtypes/meetingtypes.component';
import { MeetingtypeComponent } from './meetingtypes/meetingtype/meetingtype.component';
import { MeetingtypelistComponent } from './meetingtypes/meetingtypelist/meetingtypelist.component';
import { ContactComponent } from './contact/contact.component';
import { AgentRegHelpComponent } from './agent-reg-help/agent-reg-help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgentLeadsComponent } from './LoginNew/agent-leads/agent-leads.component';
import { AgentleaddeatilsComponent } from './LoginNew/agent-leads/agentleaddeatils/agentleaddeatils.component';
import { AgentLandingPageComponent } from './agent-landing-page/agent-landing-page.component';
import { MaintainAgentComponent } from './profile/maintain-agent/maintain-agent/maintain-agent.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { UserroleComponent } from './userroles/userrole/userrole/userrole.component';
import { UserroleListComponent } from './userroles/userrole-list/userrole-list/userrole-list.component';
import { RfqComponent } from './rfq/rfq/rfq.component';
import { ViewquoteComponent } from './quote/viewquote/viewquote/viewquote.component';
import { LeadDetailComponent } from './Reporting/lead-details/lead-details.component';
import { AgentLeadHistoryComponent } from './Reporting/agent-lead-history/agent-lead-history.component';
import { AgentSignUpComponent } from './Reporting/agent-sign-up/agent-sign-up.component';
import { JustProductsComponent } from './Reporting/just-products/just-products.component';
import { SupplierReportComponent } from './Reporting/supplier/supplier.component';
import { ProductsSoldComponent } from './Reporting/products-sold/products-sold.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AgentViewComponent } from './agents/agent-view/agent-view.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProducttypeComponent } from './producttypes/producttype/producttype.component';
import { ProducttypelistComponent } from './producttypes/producttypelist/producttypelist.component';
import { ProducttypesComponent } from './producttypes/producttypes.component';
import { CommissionHelpComponent } from './commissions/commission-help/commission-help/commission-help.component';
import { CommissionupdateComponent } from './commissions/commissionupdate/commissionupdate/commissionupdate.component';
import { BotComponent } from './shared/employee/bot/bot/bot.component';
import { AgentlistHelpComponent } from './agents/agent-list/agentlist-help/agentlist-help/agentlist-help.component';
import { ViewhelpComponent } from './agents/agent-view/viewhelp/viewhelp/viewhelp.component';
import { SystemComponent } from './system/system/system.component';
import { HelpdocComponent } from './helpdoc/helpdoc/helpdoc.component';
import { ProductcategoriesComponent } from './productcategories/productcategories.component';
import { ProductcategoryComponent } from './productcategories/productcategory/productcategory.component';
import { ProductcategoryListComponent } from './productcategories/productcategory-list/productcategory-list.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConditionComponent } from './conditions/condition/condition.component';
import { ConditionListComponent } from './conditions/condition-list/condition-list.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password/reset-password.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { MaintainemployeeComponent } from './employee-profile/maintainemployee/maintainemployee/maintainemployee.component';
import { LeadsHelpComponent } from './leads/leads-help/leads-help/leads-help.component';
import { LeadhelpComponent } from './leads/lead/leadhelp/leadhelp/leadhelp.component';
import { AgentleadsHelpComponent } from './LoginNew/agent-leads/agentleads-help/agentleads-help/agentleads-help.component';
import { AgentleaddetailsHelpComponent } from './LoginNew/agent-leads/agentleaddeatils/agentleaddetails-help/agentleaddetails-help/agentleaddetails-help.component';
import { ViewquoteHelpComponent } from './quote/viewquote/viewquote/viewquote-help/viewquote-help/viewquote-help.component';
import { LeaddetailsHelpComponent } from './leads/lead-details/leaddetails-help/leaddetails-help/leaddetails-help.component';
import { ForgottenComponent } from './login/forgotten/forgotten/forgotten.component';
import { CheckemailComponent } from './login/forgotten/checkemail/checkemail/checkemail.component';
import { ResetemployeeComponent } from './employee-profile/resetemployee/resetemployee/resetemployee.component';
import { UserroleHelpComponent } from './userroles/userrole-help/userrole-help/userrole-help.component';
import { AddurhelpComponent } from './userroles/userrole/addurhelp/addurhelp/addurhelp.component';
import { RfqhelpComponent } from './rfq/rfq/rfqhelp/rfqhelp/rfqhelp.component';
import { QuotehelpComponent } from './quote/quotehelp/quotehelp/quotehelp.component';
import { CommissionlisthelpComponent } from './commissions/commission-list/commissionlisthelp/commissionlisthelp/commissionlisthelp.component';
import { AddcommissionhelpComponent } from './commissions/commission/addcommissionhelp/addcommissionhelp/addcommissionhelp.component';
import { CommissionupdatehelpComponent } from './commissions/commissionupdate/commissionupdatehelp/commissionupdatehelp/commissionupdatehelp.component';
import { ConditionlisthelpComponent } from './conditions/condition-list/conditionlisthelp/conditionlisthelp/conditionlisthelp.component';
import { ConditionhelpComponent } from './conditions/condition/conditionhelp/conditionhelp/conditionhelp.component';
import { ConditionshelpComponent } from './conditions/conditionshelp/conditionshelp/conditionshelp.component';
import { MeetingtypelisthelpComponent } from './meetingtypes/meetingtypelist/meetingtypelisthelp/meetingtypelisthelp/meetingtypelisthelp.component';
import { MeetingtypehelpComponent } from './meetingtypes/meetingtype/meetingtypehelp/meetingtypehelp/meetingtypehelp.component';
import { MeetingtypeshelpComponent } from './meetingtypes/meetingtype/meetingtypeshelp/meetingtypeshelp/meetingtypeshelp.component';
import { AgenttypelisthelpComponent } from './agenttypes/agenttype-list/agenttypelisthelp/agenttypelisthelp/agenttypelisthelp.component';
import { AgenttypehelpComponent } from './agentypes/agenttype/agenttypehelp/agenttypehelp/agenttypehelp.component';
import { AgenttypeshelpComponent } from './agenttypes/agenttypeshelp/agenttypeshelp/agenttypeshelp.component';
import { EmployeelisthelpComponent } from './employees/employee-list/employeelisthelp/employeelisthelp/employeelisthelp.component';
import { EmployeehelpComponent } from './employees/employee/employeehelp/employeehelp/employeehelp.component';
import { EmployeetypelisthelpComponent } from './employee-types/employee-type-list/employeetypelisthelp/employeetypelisthelp/employeetypelisthelp.component';
import { EmployeetypehelpComponent } from './employee-types/employee-type/employeetypehelp/employeetypehelp/employeetypehelp.component';
import { EmployeetypeshelpComponent } from './employee-types/employeetypeshelp/employeetypeshelp/employeetypeshelp.component';
import { UserroleshelpComponent } from './userroles/userroleshelp/userroleshelp/userroleshelp.component';
import { AudittrailComponent } from './audittrail/audittrail.component'; import { CalenderComponent } from './calender/calender.component';
// import { DatedialogComponent } from './calender/datedialog/datedialog.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RescheduleComponent } from './meeting/reschedule/reschedule.component';
import { SlotsComponent } from './meeting/slots/slots.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { CountrylisthelpComponent } from './countries/country-list/countrylisthelp/countrylisthelp/countrylisthelp.component';


import { DatedialogComponent } from './calender/datedialog/datedialog.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BnNgIdleService } from 'bn-ng-idle';
import { UserIdleModule } from 'angular-user-idle';
import interactionPlugin from '@fullcalendar/interaction';
import { CountryhelpComponent } from './countries/country/countryhelp/countryhelp/countryhelp.component';
import { CountrieshelpComponent } from './countries/countrieshelp/countrieshelp/countrieshelp.component';
import { AgentleadhistoryelpComponent } from './Reporting/agent-lead-history/agentleadhistoryelp/agentleadhistoryelp/agentleadhistoryelp.component';
import { AgentsignuphelpComponent } from './Reporting/agent-sign-up/agentsignuphelp/agentsignuphelp/agentsignuphelp.component';
import { JustproductshelpComponent } from './Reporting/just-products/justproductshelp/justproductshelp/justproductshelp.component';
import { LeaddetailshelpComponent } from './Reporting/lead-details/leaddetailshelp/leaddetailshelp/leaddetailshelp.component';
import { ProductssoldhelpComponent } from './Reporting/products-sold/productssoldhelp/productssoldhelp/productssoldhelp.component';
import { SupplierhelpComponent } from './Reporting/supplier/supplierhelp/supplierhelp/supplierhelp.component';
import { ProductcathelpComponent } from './productcategories/productcategory/productcathelp/productcathelp/productcathelp.component';
import { ProductcategorylisthelpComponent } from './productcategories/productcategory-list/productcategorylisthelp/productcategorylisthelp/productcategorylisthelp.component';
import { ProductcategorieshelpComponent } from './productcategories/productcategorieshelp/productcategorieshelp/productcategorieshelp.component';
import { ProductypehelpComponent } from './producttypes/producttype/productypehelp/productypehelp/productypehelp.component';
import { ProducttypelisthelpComponent } from './producttypes/producttypelist/producttypelisthelp/producttypelisthelp/producttypelisthelp.component';
import { ProductypeshelpComponent } from './producttypes/productypeshelp/productypeshelp/productypeshelp.component';
import { ProducthelpComponent } from './products/product/producthelp/producthelp/producthelp.component';
import { ProductlisthelpComponent } from './products/products-list/productlisthelp/productlisthelp/productlisthelp.component';
import { ProductshelpComponent } from './products/productshelp/productshelp/productshelp.component';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';
import { SlotcrudComponent } from './slotcrud/slotcrud.component';


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AgentRegistrationComponent,
    ProfileComponent,
    LeadsComponent,
    LeadComponent,
    LeadItemsComponent,
    LeadDetailsComponent,
    SignUpComponent,
    LoginComponent,
    SignInComponent,
    ForbiddenComponent,
    CommissionsComponent,
    CommissionComponent,
    CommissionListComponent,
    QuoteComponent,
    SuppliersComponent,
    SupplierListComponent,
    Supplier1Component,
    AgenttypesComponent,
    AgenttypeComponent,
    AgenttypeListComponent,
    CountriesComponent,
    CountryComponent,
    CountryListComponent,
    EmployeeTypesComponent,
    EmployeeTypeComponent,
    EmployeeTypeListComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MeetingtypesComponent,
    MeetingtypeComponent,
    MeetingtypelistComponent,
    ContactComponent,
    AgentRegHelpComponent,
    AgentLeadsComponent,
    AgentleaddeatilsComponent,
    AgentLandingPageComponent,
    MaintainAgentComponent,
    UserrolesComponent,
    UserroleComponent,
    UserroleListComponent,
    RfqComponent,
    ViewquoteComponent,
    LeadDetailComponent,
    AgentLeadHistoryComponent,
    AgentSignUpComponent,
    JustProductsComponent,
    SupplierReportComponent,
    ProductsSoldComponent,
    AgentListComponent,
    AgentViewComponent,
    ProductComponent,
    ProductsListComponent,
    ProductsComponent,
    ProducttypeComponent,
    ProducttypelistComponent,
    ProducttypesComponent,
    CommissionHelpComponent,
    CommissionupdateComponent,
    BotComponent,
    AgentlistHelpComponent,
    ViewhelpComponent,
    SystemComponent,
    HelpdocComponent,
    ProductcategoriesComponent,
    ProductcategoryComponent,
    ProductcategoryListComponent,
    ConditionsComponent,
    ConditionComponent,
    ConditionListComponent,
    ResetPasswordComponent,
    EmployeeProfileComponent,
    MaintainemployeeComponent,
    LeadsHelpComponent,
    LeadhelpComponent,
    AgentleadsHelpComponent,
    AgentleaddetailsHelpComponent,
    ViewquoteHelpComponent,
    LeaddetailsHelpComponent,
    ForgottenComponent,
    CheckemailComponent,
    ResetemployeeComponent,
    UserroleHelpComponent,
    AddurhelpComponent,
    RfqhelpComponent,
    QuotehelpComponent,
    CommissionlisthelpComponent,
    AddcommissionhelpComponent,
    CommissionupdatehelpComponent,
    ConditionlisthelpComponent,
    ConditionhelpComponent,
    ConditionshelpComponent,
    MeetingtypelisthelpComponent,
    MeetingtypehelpComponent,
    MeetingtypeshelpComponent,
    AgenttypelisthelpComponent,
    AgenttypehelpComponent,
    AgenttypeshelpComponent,
    EmployeelisthelpComponent,
    EmployeehelpComponent,
    EmployeetypelisthelpComponent,
    EmployeetypehelpComponent,
    EmployeetypeshelpComponent,
    UserroleshelpComponent,
    AudittrailComponent,
    CalenderComponent,
    DatedialogComponent,
    MeetingComponent,
    RescheduleComponent,
    SlotsComponent,
    FinalizeComponent,
    CountrylisthelpComponent,
    CountryhelpComponent,
    CountrieshelpComponent,
    AgentleadhistoryelpComponent,
    AgentsignuphelpComponent,
    JustproductshelpComponent,
    LeaddetailshelpComponent,
    ProductssoldhelpComponent,
    SupplierhelpComponent,
    ProductcathelpComponent,
    ProductcategorylisthelpComponent,
    ProductcategorieshelpComponent,
    ProductypehelpComponent,
    ProducttypelisthelpComponent,
    ProductypeshelpComponent,
    ProducthelpComponent,
    ProductlisthelpComponent,
    ProductshelpComponent,
    ViewmeetingComponent,
    SlotcrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    FullCalendarModule,
    UserIdleModule.forRoot({idle: 60, timeout: 60}),
    TimepickerModule.forRoot(),
  ],
  entryComponents: [LeadItemsComponent, AgentRegHelpComponent, CommissionHelpComponent],
  providers: [AgentService, 
    UserService, 
    LeadService, 
    LoginuserService,
    AuthGuard,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
