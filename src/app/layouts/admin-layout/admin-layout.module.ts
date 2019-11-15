import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { ClosureComponent }            from '../../pages/closure/closure.component';
import { TableComponent }           from '../../pages/table/table.component';
import { ProposalComponent }           from '../../pages/proposal/proposal.component';
import { ContractsComponent }            from '../../pages/contracts/contracts.component';
import { DeliveryComponent }   from '../../pages/delivery/delivery.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ClosureComponent,
    TableComponent,
    UpgradeComponent,
    ProposalComponent,
    ContractsComponent,
    DeliveryComponent,
  ]
})

export class AdminLayoutModule {}
