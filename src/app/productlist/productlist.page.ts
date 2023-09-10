import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyapiService } from '../dummyapi.service';





@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  id:any;
  single_product:any=[];

  constructor(private activatedRoute:ActivatedRoute,private dummyapiService:DummyapiService) { 

    this.activatedRoute.queryParams.subscribe(params=>{
      // console.log(params);
      this.id = params['id'];
      console.log('id',this.id);
    });

  }

  ionViewWillEnter(){
    
    this.dummyapiService.getData("https://dummyjson.com/products/"+this.id).subscribe((res)=>{
      // console.log(res);
      this.single_product = res;
      console.log('single product',this.single_product);
      
    });
  }

  ngOnInit() {
  }

}
