import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ClosureComponent } from '../../pages/closure/closure.component';
import { ProposalComponent } from '../../pages/proposal/proposal.component';
import { ContractsComponent } from '../../pages/contracts/contracts.component';
import { DeliveryComponent } from '../../pages/delivery/delivery.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'closure',           component: ClosureComponent },
    { path: 'proposal',          component: ProposalComponent },
    { path: 'contracts',           component: ContractsComponent },
    { path: 'delivery',  component: DeliveryComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
