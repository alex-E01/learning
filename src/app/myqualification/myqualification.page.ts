import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-myqualification',
  templateUrl: './myqualification.page.html',
  styleUrls: ['./myqualification.page.scss'],
})
export class MyqualificationPage implements OnInit {
  all_qualification: any = [];
  token:any;
  my_qualification:any=[];
  skillsForm: FormGroup;
  qualification: any = [];


  constructor(private fb:FormBuilder) { 
    
    this.skillsForm = this.fb.group({
      name: new FormControl('', Validators.required),
      skills: this.fb.array([this.newSkill()]),
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    let getdata = localStorage.getItem("qualifiction");
    if (getdata != null) {
      this.all_qualification = JSON.parse(getdata);
      // console.log('qualification', this.all_qualification);
    }

    let gettoken = localStorage.getItem("token");
    if(gettoken !=null){
      this.token = JSON.parse(gettoken);
      // console.log('token',this.token);
    }

    this.all_qualification.forEach((element:any) => {
      if(element.email == this.token.email){
        this.my_qualification = element;
        console.log('myqualification',this.my_qualification);
      }
    });

    this.skillsForm.controls['name'].setValue(this.my_qualification.name); 
    this.skills.clear();
    this.pushskills();
  }



  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      'skill': new FormControl('', Validators.required),
      'exp': new FormControl('', Validators.required),
    });
  }

  addskills() {
    this.skills.push(this.newSkill());
  }
  pushskills(){
    this.my_qualification.skills.forEach((element:any) => {
    this.skills.push(this.fb.group({
      'skill': new FormControl(element.skill, Validators.required),
      'exp': new FormControl(element.exp, Validators.required),
    }));
  });
  }

  removeSkill(i: any) {
    console.log(i);
    this.skills.removeAt(i);
  }

  onsubmit(value: any) {
    console.log(value);
    value.email = this.token.email;
    this.qualification.push(value);
    localStorage.setItem("qualifiction",JSON.stringify(this.qualification));
    console.log('onsubmit',this.qualification);
  }

}
