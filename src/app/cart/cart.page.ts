import { Component, OnInit } from '@angular/core';
import { DummyapiService } from '../dummyapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  local_mycart:any=[];
  mycart:any=[];
  

  constructor(private dummyapiService:DummyapiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

      let getdata = localStorage.getItem("my_cart");
      if(getdata != null){
        this.local_mycart = JSON.parse(getdata);
        console.log(this.local_mycart);
      }
      this.local_mycart.forEach((element:any) => {

        this.dummyapiService.getData("https://dummyjson.com/products/"+element.id).subscribe((res:any)=>{
          // console.log(res);
          this.mycart.push(res);
          console.log('this.mycart',this.mycart);
        });

        
      });
     
  }

}
