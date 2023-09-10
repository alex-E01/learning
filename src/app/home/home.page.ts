import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any = [];
  token: any;
  loggedin_user: any = [];
  selectsegment: any = 'allpost';
  myindex: any;
  mypost: any = [];
  userpost: any = [];

  searchTerm: string = "";
  items: any;
  setitem:any=[];

  constructor(private router: Router, private alertController: AlertController) { }

  ionViewWillEnter() {

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

    this.myindex = index;
    this.loggedin_user = this.users[index];
    console.log('loginuser', this.loggedin_user);
    console.log(this.loggedin_user.email)

    let getpost = localStorage.getItem('alluser_post');
    if (getpost != null) {
      this.userpost = JSON.parse(getpost);
      this.setFilteredItems();
      console.log('alluser_post', this.userpost);
      this.mypost = [];
      this.userpost.forEach((element: any) => {

        if (element.user_email == this.token.email) {
          console.log('mypost', element);
          this.mypost.push(element);
          console.log('mypost', this.mypost);
        }

      });
    }
    
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.removeItem("token");
  }
  deleteaccount() {

    this.users.splice(this.myindex, 1);
    console.log(this.users);
    localStorage.setItem('registered_user', JSON.stringify(this.users));
    this.router.navigate(['/login']);
  }
  createpost() {
    this.router.navigate(['/createpost']);
  }

  setFilteredItems() {
    this.setitem =  this.userpost;
      console.log(this.userpost);
  }


  filterItems(searchTerm:any) {
    if(searchTerm == null){
        this.setFilteredItems();
    }
        this.setitem = this.userpost.filter((item:any)=>{
          // console.log(item.post_content);
        return item.post_content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
  }

 
}
