import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.route';

//Providers
import { Data } from './models/data';
import { UserService } from './_services/user.service';
import { PanService } from './_services/pan.service';
import { Form16Service } from './_services/form16.service';
import { GeneratePdfService } from './_services/generate-pdf.service';
import { UserManagementService } from './_services/user-management.service';
import { LoginRouteGuard } from './_gaurds/login-route.gaurd';

//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { IndividualEfilingComponent } from './landing/individual-efiling/individual-efiling.component';
import { ProfessionalEfilingComponent } from './landing/professional-efiling/professional-efiling.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HraComponent } from './forms/hra/hra.component';
import { HraResultComponent } from './forms/hra/hra-result.component';
import { CalculateTaxComponent } from './forms/calculate-tax/calculate-tax.component';
import { TaxResultComponent } from './forms/calculate-tax/tax-result.component';
import { CheckRefundComponent } from './forms/check-refund/check-refund.component';
import { RefundResultComponent } from './forms/check-refund/refund-result.component';
import { RentReceiptComponent } from './forms/rent-receipt/rent-receipt.component';
import { Form12bbComponent } from './forms/form12bb/form12bb.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { PanManagementComponent } from './dashboard/pan-management/pan-management.component';
import { AddPanComponent } from './dashboard/add-pan/add-pan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { AddOtherPanComponent } from './dashboard/add-other-pan/add-other-pan.component';
import { Form16Component } from './dashboard/form16/form16.component';
import { PersonalInfoComponent } from './dashboard/form16/personal-info/personal-info.component';
import { IncomeSourcesComponent } from './dashboard/form16/income-sources/income-sources.component';
import { DeductionsComponent } from './dashboard/form16/deductions/deductions.component';
import { TaxPaidComponent } from './dashboard/form16/tax-paid/tax-paid.component';
import { TaxFilingComponent } from './dashboard/form16/tax-filing/tax-filing.component';
import { SalaryComponent } from './dashboard/form16/income-sources/salary/salary.component';
import { OtherIncomeComponent } from './dashboard/form16/income-sources/other-income/other-income.component';
import { HousePropertyComponent } from './dashboard/form16/income-sources/house-property/house-property.component';
import { CapitalComponent } from './dashboard/form16/income-sources/capital/capital.component';
import { SharesDebenturesComponent } from './dashboard/form16/income-sources/capital/shares-debentures/shares-debentures.component';
import { PropertyComponent } from './dashboard/form16/income-sources/capital/property/property.component';
import { OtherAssetComponent } from './dashboard/form16/income-sources/capital/other-asset/other-asset.component';
import { MutualFundComponent } from './dashboard/form16/income-sources/capital/mutual-fund/mutual-fund.component';
import { Section80DeductionComponent } from './dashboard/form16/deductions/section-80-deduction/section-80-deduction.component';
import { MoreDeductionsComponent } from './dashboard/form16/deductions/more-deductions/more-deductions.component';
import { PermanentInfoComponent } from './dashboard/form16/personal-info/permanent-info/permanent-info.component';
import { AddressComponent } from './dashboard/form16/personal-info/address/address.component';
import { TrackStatusComponent } from './dashboard/track-status/track-status.component';
import { DocumentVaultComponent } from './dashboard/document-vault/document-vault.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { UpgradePlanComponent } from './dashboard/history/upgrade-plan/upgrade-plan.component';
import { CancelPlanComponent } from './dashboard/history/cancel-plan/cancel-plan.component';
import { PanDataComponent } from './dashboard/pan-management/pan-data/pan-data.component';
import { UploadForm16Component } from './dashboard/upload-form16/upload-form16.component';
import { DashboardButtonsComponent } from './dashboard/dashboard-buttons/dashboard-buttons.component';
import { PanDetailsComponent } from './dashboard/pan-management/pan-details/pan-details.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { UserDetailsComponent } from './dashboard/user-management/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    IndividualEfilingComponent,
    ProfessionalEfilingComponent,
    FooterComponent,
    HraComponent,
    HraResultComponent,
    CalculateTaxComponent,
    TaxResultComponent,
    CheckRefundComponent,
    RefundResultComponent,
    RentReceiptComponent,
    Form12bbComponent,
    LoginComponent,
    RegisterComponent,
    PanManagementComponent,
    AddPanComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    AddOtherPanComponent,
    Form16Component,
    PersonalInfoComponent,
    IncomeSourcesComponent,
    DeductionsComponent,
    TaxPaidComponent,
    TaxFilingComponent,
    SalaryComponent,
    OtherIncomeComponent,
    HousePropertyComponent,
    CapitalComponent,
    SharesDebenturesComponent,
    PropertyComponent,
    OtherAssetComponent,
    MutualFundComponent,
    Section80DeductionComponent,
    MoreDeductionsComponent,
    PermanentInfoComponent,
    AddressComponent,
    TrackStatusComponent,
	DocumentVaultComponent,
	HomeComponent,
	HistoryComponent,
	UpgradePlanComponent,
	CancelPlanComponent,
	PanDataComponent,
	UploadForm16Component,
	DashboardButtonsComponent,
	PanDetailsComponent,
	UserManagementComponent,
	AddUserComponent,
	UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    Data,
    LoginRouteGuard,
    UserService,
    PanService,
    Form16Service,
    UserManagementService,
    GeneratePdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
