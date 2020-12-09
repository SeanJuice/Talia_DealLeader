import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './leads/lead/lead.component';
import { LeadDetailsComponent } from './leads/lead-details/lead-details.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AgentRegistrationComponent } from "./agent-registration.component";
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionComponent } from './commissions/commission/commission.component';
import { CommissionListComponent } from './commissions/commission-list/commission-list.component';
import { QuoteComponent } from './quote/quote.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AgenttypesComponent } from './agenttypes/agenttypes.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryComponent } from './countries/country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { EmployeeTypesComponent } from './employee-types/employee-types.component';
import { EmployeeTypeComponent } from './employee-types/employee-type/employee-type.component';
import { EmployeeTypeListComponent } from './employee-types/employee-type-list/employee-type-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { MeetingtypesComponent } from './meetingtypes/meetingtypes.component';
import { MeetingtypeComponent } from './meetingtypes/meetingtype/meetingtype.component';
import { MeetingtypelistComponent } from './meetingtypes/meetingtypelist/meetingtypelist.component';
import { ContactComponent } from './contact/contact.component';
import { AgentRegHelpComponent } from './agent-reg-help/agent-reg-help.component';
import { AgentLeadsComponent } from './LoginNew/agent-leads/agent-leads.component';
import { AgentleaddeatilsComponent } from './LoginNew/agent-leads/agentleaddeatils/agentleaddeatils.component';
import { AgentLandingPageComponent } from './agent-landing-page/agent-landing-page.component';
import { MaintainAgentComponent } from './profile/maintain-agent/maintain-agent/maintain-agent.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { RfqComponent } from './rfq/rfq/rfq.component';
import { ViewquoteComponent } from './quote/viewquote/viewquote/viewquote.component';
import { LeadDetailComponent } from './Reporting/lead-details/lead-details.component';
import { AgentLeadHistoryComponent } from './Reporting/agent-lead-history/agent-lead-history.component';
import { AgentSignUpComponent } from './Reporting/agent-sign-up/agent-sign-up.component';
import { JustProductsComponent } from './Reporting/just-products/just-products.component';
import { ProductsSoldComponent } from './Reporting/products-sold/products-sold.component';
import { SupplierReportComponent } from './Reporting/supplier/supplier.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AgentViewComponent } from './agents/agent-view/agent-view.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import { ProducttypeComponent } from './producttypes/producttype/producttype.component';
import { ProducttypelistComponent } from './producttypes/producttypelist/producttypelist.component';
import { ProducttypesComponent } from './producttypes/producttypes.component';
import { CommissionupdateComponent } from './commissions/commissionupdate/commissionupdate/commissionupdate.component';
import { UserroleListComponent } from './userroles/userrole-list/userrole-list/userrole-list.component';
import { UserroleComponent } from './userroles/userrole/userrole/userrole.component';
import { BotComponent } from './shared/employee/bot/bot/bot.component';
import { SystemComponent } from './system/system/system.component';
import { HelpdocComponent } from './helpdoc/helpdoc/helpdoc.component';
import { ProductcategoryListComponent } from './productcategories/productcategory-list/productcategory-list.component';
import { ProductcategoriesComponent } from './productcategories/productcategories.component';
import { ProductcategoryComponent } from './productcategories/productcategory/productcategory.component';
import { ConditionListComponent } from './conditions/condition-list/condition-list.component';
import { ConditionComponent } from './conditions/condition/condition.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { MaintainemployeeComponent } from './employee-profile/maintainemployee/maintainemployee/maintainemployee.component';
import { AgenttypeListComponent } from './agenttypes/agenttype-list/agenttype-list.component';
import { AgenttypeComponent } from './agentypes/agenttype/agenttype.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password/reset-password.component';
import { ForgottenComponent } from './login/forgotten/forgotten/forgotten.component';
import { CheckemailComponent } from './login/forgotten/checkemail/checkemail/checkemail.component';
import { ResetemployeeComponent } from './employee-profile/resetemployee/resetemployee/resetemployee.component';
import { SlotsComponent } from './meeting/slots/slots.component';
import { FinalizeComponent } from './finalize/finalize.component';


import { DatedialogComponent } from './calender/datedialog/datedialog.component';
import { CalenderComponent } from './calender/calender.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';
import { Supplier1Component } from './suppliers/supplier1/supplier1.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'bot', component: BotComponent},
  {path : 'system', component: SystemComponent},
  {path : 'helpdoc', component: HelpdocComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'employeeprofile', component: EmployeeProfileComponent},
  {path: 'maintainemployee/:id', component: MaintainemployeeComponent},
  {path: 'userrole-list', component:  UserroleListComponent},
  {path: 'userrole', component: UserroleComponent},
  {path: 'userroles/:id', component: UserrolesComponent},
  {path: 'maintainagent/:id', component: MaintainAgentComponent},
  {path: 'leads', component: LeadsComponent},
  {path: 'lead', children:  [
    {path: '', component : LeadComponent},
    {path: 'edit/:id', component: LeadDetailsComponent},
  ]},

  //Reporting
  {path: 'leadetails', component: LeadDetailComponent},
  {path: 'leadhistory', component: AgentLeadHistoryComponent},
  {path: 'agentsignup', component: AgentSignUpComponent},
  {path: 'justproducts', component: JustProductsComponent},
  {path: 'productssold', component: ProductsSoldComponent},
  {path: 'supplierreport', component: SupplierReportComponent},

  //Tina
  {path: 'agentlist', component: AgentListComponent},
  {path: 'viewagent/:id', component: AgentViewComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productlist', component: ProductsListComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'producttype', component: ProducttypeComponent},
  {path: 'producttypelist', component: ProducttypelistComponent},
  {path: 'producttypes/:id', component: ProducttypesComponent},
  {path: 'productcategorylist', component: ProductcategoryListComponent},
  {path: 'productcategories/:id', component: ProductcategoriesComponent},
  {path: 'productcategory', component: ProductcategoryComponent},
  {path: 'coundition-list', component: ConditionListComponent},
  {path: 'coundition', component: ConditionComponent},
  {path: 'counditions/:id', component: ConditionsComponent},
  {path: 'reset/:id', component : ResetPasswordComponent},
  {path: 'forgotten', component : ForgottenComponent},
  {path: 'checkemail', component : CheckemailComponent},
  {path: 'resetemployee/:id', component : ResetemployeeComponent},
  {path: 'finalize', component : FinalizeComponent},
  {path: 'viewmeeting/:id', component : ViewmeetingComponent},
  {path: 'slots/:id', component:  SlotsComponent},
  {path: 'datedialog', component: DatedialogComponent},
  {path: 'calender/:id', component: CalenderComponent},
  {path: 'meeting/:id', component: MeetingComponent},
  {path: 'supplierlist', component: SupplierListComponent},
  {path: 'supplier', component: Supplier1Component},
  {path: 'suppliers/:id', component: SuppliersComponent},
  

  {path: 'sign-up', component: SignUpComponent},
  {path: 'rfq/:id', component :RfqComponent},
  {path: 'meetingtypes/:id', component: MeetingtypesComponent},
  {path: 'meetingtype', component: MeetingtypeComponent},
  {path: 'meetingtypelist', component: MeetingtypelistComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employees/:id', component: EmployeesComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-types/:id', component: EmployeeTypesComponent},
  {path: 'employee-type', component: EmployeeTypeComponent},
  {path: 'employee-type-list', component: EmployeeTypeListComponent},
  {path: 'country-list', component: CountryListComponent},
  {path: 'country', component: CountryComponent},
  {path: 'countries/:id', component: CountriesComponent},
  {path: 'agenttypes/:id', component: AgenttypesComponent},
  {path: 'agenttype-list', component: AgenttypeListComponent},
  {path: 'agenttype', component: AgenttypeComponent},

  
  {path: 'commissions', component: CommissionsComponent},
  {path: 'supplier-list', component: SupplierListComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'commission', component: CommissionComponent},
  {path: 'commissionupdate/:id', component: CommissionupdateComponent},
  {path: 'commission-list', component: CommissionListComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'reghelp', component: AgentRegHelpComponent},
  {path: 'agentleads', children:  [
    {path: '', component : AgentLeadsComponent},
    {path: 'edit/:id', component: AgentleaddeatilsComponent},
  ]},
  {path: 'agentlanding', component : AgentLandingPageComponent},


  {path: 'agentreg', component: LoginComponent,
   children : [{path: '', component : AgentRegistrationComponent}]
  },
  {path: 'login', component: LoginComponent,
  children : [{path: '', component : SignInComponent},
]},
//  {path: 'sign-up', component: LoginComponent,
//  children : [{path: '', component : AgentRegistrationComponent}]
// },
{path: 'forbidden', component: ForbiddenComponent},
{path : 'viewquote/:id', component : ViewquoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
