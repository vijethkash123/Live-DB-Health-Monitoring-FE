import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { ClosureComponent }            from '../../pages/closure/closure.component';
import { ProposalComponent }           from '../../pages/proposal/proposal.component';
import { ContractsComponent }            from '../../pages/contracts/contracts.component';
import { DeliveryComponent }   from '../../pages/delivery/delivery.component';
import {NewdealComponent} from '../../pages/newdeal/newdeal.component';
import {RenewalComponent} from '../../pages/renewal/renewal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatTabsModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    ClosureComponent,
    ProposalComponent,
    ContractsComponent,
    DeliveryComponent,
    NewdealComponent,
    RenewalComponent
  ]
})

export class AdminLayoutModule {}
