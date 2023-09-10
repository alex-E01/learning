import { Component, OnInit } from '@angular/core';
import { DummyapiService } from '../dummyapi.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-dummyapi',
  templateUrl: './dummyapi.page.html',
  styleUrls: ['./dummyapi.page.scss'],
})
export class DummyapiPage implements OnInit {
  product: any = [];
  token:any;
  mycart:any=[]

  constructor(private dummyapiService: DummyapiService,private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.dummyapiService.getData("https://dummyjson.com/products").subscribe((res: any) => {

      // console.log(res);
      this.product = res.products;
      console.log(this.product);

    });

    let gettoken = localStorage.getItem('token');
    if (gettoken != null) {
      this.token = JSON.parse(gettoken);
      console.log('token', this.token.email);
    }

    let getdata = localStorage.getItem('my_cart');
    if(getdata  != null){
      this.mycart = JSON.parse(getdata);
    }

  }

  onclick(i:any) {

   const navigationExtras = {
    queryParams:{
      id:i,
    }
   }
    this.router.navigate(['productlist'],navigationExtras)

  }

  async Addtocart(i:any){

    let savedata : any = {
      id: i,
      email :this.token.email,
      quantity : 1,
    }
    let index = this.mycart.findIndex((element:any)=> element.id == i);
      console.log(index);
      if(index != -1){
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Item Already Added',
          buttons: ['OK'],
        });
    
        await alert.present();
      
      }else{
        console.log(savedata);
        this.mycart.push(savedata);
        localStorage.setItem("my_cart",JSON.stringify(this.mycart));
      }

    

  }


}
