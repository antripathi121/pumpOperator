import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgForm, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private user: UserService,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder
  ) { }

  email = '';
  password = '';
  isActiveToggleTextPassword = true;

  show = false;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
  ngOnInit() {

  }
  formData: FormData = new FormData();
  loginForm = this.formBuilder.group({
    password:[],
    username: []
   });


  async  forget() {

    const prompt = await this.alertCtrl.create({
      header: 'Reset Password..',


      // message: 'Enter a name for this new album',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your Email...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'submit',
          handler: data => {
            // tslint:disable-next-line: prefer-const
            let validateObj = this.validateEmail(data);
            if (!validateObj.isValid) {
              // prompt.setMessage('Your validation message');
              this.showErrorToast('Invalid Email..');
              return false;
            } else {
              // make HTTP call
              console.log('Saved clicked');
              this.router.navigateByUrl('/updateemail');
            }
          }
        }
      ]
    });
    await prompt.present();
  }
  validateEmail(data) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(data.email)) {
      return {
        isValid: true,
        message: ''
      };
    } else {
      return {
        isValid: false,
        showErrorToast: 'Invalid Email',
        message: 'Email address is required'

      };
    }
  }
  async showErrorToast(data: any) {
    // tslint:disable-next-line: prefer-const
    let toast = await this.toastCtrl.create({
      message: data,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    console.log('invalid mail');
    toast.present();

  }

  login(form) {
    this.formData.append('username', form.value.email);  
    this.formData.append('password', form.value.password);
    // tslint:disable-next-line: triple-equals
    if ((this.email == '') || (this.password == '')) {
      // tslint:disable-next-line: prefer-const
      let toast =  this.toastCtrl.create({
        message: 'empty username or password.. ',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      console.log('invalid username or password..');
      // toast.present();

    } else {
      console.log('valid username or password..');
     
      this.user.login(this.formData).subscribe(res => {
        console.log(res);
        if(res.status==1){
          localStorage.setItem('token',res.msg)
          this.router.navigateByUrl('/home');
        } else {
          alert('Invalid User')
        }
      },
      error => {
        console.log(error);
      }
      );
    }

  }

}

