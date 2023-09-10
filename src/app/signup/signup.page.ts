import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupform: FormGroup;
  users: any = [];

  constructor(private alertController:AlertController,private router:Router) {

    this.signupform = new FormGroup({

      name: new FormControl('', ([Validators.required])),
      gender: new FormControl('', ([Validators.required])),
      fathername: new FormControl('', ([Validators.required])),
      mothername: new FormControl('', ([Validators.required])),
      email: new FormControl('', ([Validators.required, Validators.email])),
      password: new FormControl('', ([Validators.required])),

    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let getdata = localStorage.getItem('registered_user');
    if (getdata != null) {
      this.users = JSON.parse(getdata);
      console.log(this.users);
    }
  }

  async onsubmit(value: any) {
  
    let index = this.users.findIndex((element: any) => element.email == value.email);
    this.users.push(value);
    if (index != 0) {
      localStorage.setItem('registered_user', JSON.stringify(this.users));
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Registered succssfully',
        message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();
      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Email already Registered',
        message: 'This is an alert!',
        buttons: ['OK'],
      });
      await alert.present();

    }


  }

}
