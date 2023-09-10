import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.page.html',
  styleUrls: ['./createpost.page.scss'],
})
export class CreatepostPage implements OnInit {
  createpost: any ;
  token: any;
  users: any = [];
  loggedin_user: any;
  myindex:any;
  post:any=[];
  userpost:any=[];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {

    let getpost = localStorage.getItem('alluser_post');
    if (getpost != null) {
      this.userpost = JSON.parse(getpost);
      console.log('alluser_post', this.userpost);
    }

    let gettoken = localStorage.getItem('token');
    if (gettoken != null) {
      this.token = JSON.parse(gettoken);
      console.log('token', this.token);
    }

    let getdata = localStorage.getItem('registered_user');
    if (getdata != null) {
      this.users = JSON.parse(getdata);
      console.log('alluser', this.users);
    }
    let index = this.users.findIndex((element: any) => element.email == this.token.email);
    this.loggedin_user = this.users[index];
    console.log('loginuser', this.loggedin_user);
    console.log(this.loggedin_user.email)


  }

  savedata() {
   
    if(this.createpost != null){
      let savedata = {
        post_content: this.createpost,
        user_email:this.loggedin_user.email,
        user_name:this.loggedin_user.name
      }
      this.userpost.push(savedata);
      console.log(this.userpost);
      localStorage.setItem("alluser_post",JSON.stringify(this.userpost));
      this.createpost = '';
      this.router.navigate(['/home']);
     
    }else{
      console.log('please fill fields');
    }



  }



}
