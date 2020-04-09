import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScheduleComponent } from '../schedule/schedule.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  status = false;
  constructor(
    private router: Router,
    public modalController: ModalController,
    private user: UserService
  ) {}

    ngOnInit(){
      let token=localStorage.getItem('token');
      if(token){
        console.log(token)
      } else {
        this.router.navigateByUrl('/login');
      }
    }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ScheduleComponent
    });
    return await modal.present();
    // const { data } = await modal.onWillDismiss();
    // console.log(data);
  }
  // formData: FormData = new FormData();
  power(e){
    this.status=!this.status;
    let value = this.status ? '1' : '0'
    // this.formData.append('flag', value); 
    console.log(value);
    this.user.power(value).subscribe(res=>{console.log(res)})
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
