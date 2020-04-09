import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
import { NgForm, FormGroup } from '@angular/forms';
import { async } from '@angular/core/testing';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

constructor(
          //  private authService: AuthService,
           private router: Router,
           private toastController: ToastController,
           private formBuilder: FormBuilder,
           public loadingController: LoadingController,
           private  httpClient: HttpClient,
           public alertCtrl: AlertController,
           private user: UserService) { }


// get username() {
//  return this.registrationForm.get('username');
// }
get name() {
 return this.registrationForm.get('name');
}
get email() {
 return this.registrationForm.get('email');
}
get phone() {
 return this.registrationForm.get('phone');

}
get password() {
 return this.registrationForm.get('password');
}
get cpassword() {
 return this.registrationForm.get('cpassword');
}

  dataFromService: any = '';
  otp = false;
  isActiveToggleTextPassword = true;
 registrationForm = this.formBuilder.group({
 username: ['', [Validators.required, Validators.maxLength(30)]],
 name: ['', [Validators.required, Validators.maxLength(30)]],
 email: [
   '',
   [
     Validators.required,
     Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
   ]
 ],
 phone: [
   '',
   [
     Validators.required,
     // Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
     Validators.pattern('(0/91)?[0-9]{10}'),

   ]
 ],
 password: ['',
         [
           Validators.required,
            Validators.minLength(6),
            this.getpass.bind(this)
           ]
          ],
 cpassword: ['',
         [
           Validators.required,
            // Validators.minLength(5),
            this.matchpass.bind(this)
           ]
          ],


});
matched = false;
matchedpass = false;

getpas;
eye;
public errorMessages = {
 username: [
   { type: 'required', message: 'user is required' },
   { type: 'maxlength', message: 'Name cant be longer than 30 characters' }
 ],
 name: [
   { type: 'required', message: 'Name is required' },
   { type: 'maxlength', message: 'Name cant be longer than 30 characters' }
 ],
 email: [
   { type: 'required', message: 'Email is required' },
   { type: 'pattern', message: 'Please enter a valid email address' }
 ],
 phone: [
   { type: 'required', message: 'Phone number is required' },
   { type: 'pattern', message: 'Please enter 10 digit phone number only' }
 ],
 password: [
   { type: 'required', message: 'password is required' },
   { type: 'minlength', message: 'password must be at least 5 characters long.' },
   // { type: 'pattern', message: 'Your username must contain only numbers and letters.' },

 ],
 cpassword: [
   { type: 'required', message: 'confirm password is required' },
   { type: 'minlength', message: 'confirm password must be at least 5 characters' }
 ],

};
 public toggleTextPassword(): void {
     this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
 }

 public getType() {
   if (this.isActiveToggleTextPassword) { this.eye = 'eye-off'; } else { this.eye = 'eye'; }
   return this.isActiveToggleTextPassword ? 'password' : 'text';
}

ngOnInit() {

}
getpass(formGroup: FormGroup) {
 this.getpas = formGroup.value;
}
matchpass(formGroup: FormGroup) {

 if (formGroup.value === this.getpas) {
   this.matched = false;
   this.matchedpass = true;
   if (formGroup.value == '') {
     this.matchedpass = false;

 }} else {
   this.matched = true;
   this.matchedpass = false;
 }
 console.log(formGroup.value);
}




getText(e){
 var elementValue = e.srcElement.value;
 if (elementValue){
   var regex = /^[A-z]+$/;
   var tempValue = elementValue.substring(0, elementValue.length - 1);
   if (!regex.test(elementValue)) {
      console.log('Entered char is not alphabet');
      e.srcElement.value = tempValue;
    }
 }
}

onInput($event:any) {
 let theEvent = $event || window.event,
     key = theEvent.target.value,
     
     regex = /[0-9]+/g
 if( !regex.test(key) ) {
   let resp = $event.target.value.match(regex)
   $event.target.value = resp ? resp.join('')  : ''
 }
 
 console.log(key.length);
}

formData: FormData = new FormData();
 submit() {
    this.formData.append("name", this.registrationForm.value.name);
    this.formData.append("email", this.registrationForm.value.email);
    this.formData.append("phone", this.registrationForm.value.phone);
    this.formData.append("password", this.registrationForm.value.password);
    console.log(this.registrationForm.value.name)
  this.user.register(this.formData).subscribe(res=>{
    console.log(res)
  })
 }

}
