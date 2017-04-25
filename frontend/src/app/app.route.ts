import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { IndividualEfilingComponent } from './landing/individual-efiling/individual-efiling.component';
import { ProfessionalEfilingComponent } from './landing/professional-efiling/professional-efiling.component';
import { LoginRouteGuard } from './_gaurds/login-route.gaurd';


//Outer forms
import { HraComponent } from './forms/hra/hra.component';
import { CalculateTaxComponent } from './forms/calculate-tax/calculate-tax.component';
import { CheckRefundComponent } from './forms/check-refund/check-refund.component';
import { RentReceiptComponent } from './forms/rent-receipt/rent-receipt.component';
import { Form12bbComponent } from './forms/form12bb/form12bb.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponent } from './forms/login/login.component';

//Dashboard components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanManagementComponent } from './dashboard/pan-management/pan-management.component';
import { AddPanComponent } from './dashboard/add-pan/add-pan.component';
import { AddOtherPanComponent } from './dashboard/add-other-pan/add-other-pan.component';
import { Form16Component } from './dashboard/form16/form16.component';
import { TrackStatusComponent } from './dashboard/track-status/track-status.component';
import { DocumentVaultComponent } from './dashboard/document-vault/document-vault.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { UpgradePlanComponent } from './dashboard/history/upgrade-plan/upgrade-plan.component';
import { CancelPlanComponent } from './dashboard/history/cancel-plan/cancel-plan.component';
import { UploadForm16Component } from './dashboard/upload-form16/upload-form16.component';
import { PanDetailsComponent } from './dashboard/pan-management/pan-details/pan-details.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { UserDetailsComponent } from './dashboard/user-management/user-details/user-details.component';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LandingComponent},
    { path: 'individual-package', component: IndividualEfilingComponent},
    { path: 'professional-package', component: ProfessionalEfilingComponent},

    //form paths
    { path: 'hra', component: HraComponent},
    { path: 'calculate-tax', component: CalculateTaxComponent},
    { path: 'check-refund', component: CheckRefundComponent},
    { path: 'rent-receipt', component: RentReceiptComponent},
    { path: 'form12bb', component: Form12bbComponent},
    { path: 'signup', component: RegisterComponent},
    { path: 'login', component: LoginComponent},

    //after login link paths
    { path: 'dashboard', component: DashboardComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/add-pan', component: AddPanComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/pan-management', component: PanManagementComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/pan-management/add-another-pan', component: AddOtherPanComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/form16', component: Form16Component, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/track-status', component: TrackStatusComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/document-vault', component: DocumentVaultComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/home', component: HomeComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/history', component: HistoryComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/history/upgrade-plan', component: UpgradePlanComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/history/cancel-plan', component: CancelPlanComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/upload-form16', component: UploadForm16Component, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/pan-management/pan-details', component: PanDetailsComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/user-management', component: UserManagementComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/user-management/add-user', component: AddUserComponent, canActivate: [LoginRouteGuard]},
    { path: 'dashboard/user-management/user-details', component: UserDetailsComponent, canActivate: [LoginRouteGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);