import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginform: FormGroup;
  users: any = [];
  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) {

    this.loginform = new FormGroup({

      email: new FormControl('', ([Validators.required, Validators.email])),
      password: new FormControl('', ([Validators.required])),


    });


  }

  ionViewWillEnter() {
    
    let getdata = localStorage.getItem('registered_user');
    if (getdata != null) {
      this.users = JSON.parse(getdata);
      console.log(this.users);
    }

  }

  ngOnInit() {
  }

  async onsubmit(value: any,position:'top') {
    console.log(value);

    let index = this.users.findIndex((element: any) => element.email == value.email && element.password == value.password);
    console.log(index);
    if (index != -1) {
      localStorage.setItem('token',JSON.stringify(value));
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: 'Login Successfully',
        duration: 1500,
        position: position,
      });
  
      await toast.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Invalid Credentials',
        message: 'This is an alert!',
        buttons: ['OK'],
      });
      await alert.present();
    }

  }
}
