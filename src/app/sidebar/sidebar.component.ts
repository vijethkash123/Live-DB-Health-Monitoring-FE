import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard', icon:'nc-atom',class: '' },
    { path: '/proposal',         title: 'Proposal (Deal Cycle)',icon:'nc-chart-pie-36',class: '' }, //icons
    { path: '/newdeal',         title: '° New Deal',icon:'',class: '' },
    { path: '/renewal',         title: '° Renewal',icon:'',class: '' },
    { path: '/contracts',          title: 'Contract (Initiation)',icon:'nc-glasses-2',class: '' }, //maps
    { path: '/delivery', title: 'Delivery (Execution)',icon:'nc-check-2',class: '' }, //notifications
    { path: '/closure',          title: 'Closure',icon:'nc-trophy',class: '' },    //user



];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
