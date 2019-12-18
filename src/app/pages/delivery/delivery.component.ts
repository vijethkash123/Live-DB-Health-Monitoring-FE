import { Component } from '@angular/core';


@Component({
    selector: 'delivery-cmp',
    moduleId: module.id,
    templateUrl: 'delivery.component.html'
})

export class DeliveryComponent{
  show:boolean
  p1:boolean;
  p2:boolean;
  p3:boolean;
  p4:boolean;
  toggle1(){
      this.p1 = true;
      this.show = false;
  }
  toggle2(){
      this.p2 = true;
      this.show = false;
  }
  toggle3(){
      this.p3 = true;
      this.show = false;
  }
  toggle4(){
      this.p4 = true;
      this.show = false;
  }
  main(){
      this.show = true;
      this.p1 =false
      this.p2 =false
      this.p3 =false
      this.p4 =false
  }
}
