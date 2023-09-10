import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {
  urls: any = [];
  product_title: any;
  product_name: any;
  product_price: any;
  mfd_date: any;
  exp_date: any;
  product_image: any = [];
  select_files : any=[];

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {


  }


  onselect(e: any) { 

    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        // let domurl = this.domSanitizer.bypassSecurityTrustResourceUrl(e.target.files[i]);
        // console.log(domurl);
        
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result)
          console.log('url',this.urls);
          // let domurl = this.domSanitizer.bypassSecurityTrustHtml();
          // console.log(domurl);
          
        };
      }

    }
  }


  addproduct() {
    let savedata: any = {
      product_title: this.product_title,
      product_name: this.product_name,
      product_price: this.product_price,
      mfd_date: this.mfd_date,
      exp_date: this.exp_date,
      product_image: '',
    }
    console.log('addproduct', savedata);




  }








}
