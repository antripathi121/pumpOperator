import { Component, OnInit, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {

// @ViewChild(Slides) slides: IonSlides;
tabBarElement: any;
splash = true;
slideData: any = [];

constructor(public splashScreen: SplashScreen) {
  this.tabBarElement = document.querySelector('.tabbar');
  this.slideData = [
    { lable: 'Setting your home appliances'}
    ];
}

ngOnInit() {
  this.splashScreen.show();
}

ionViewDidEnter() {
  // this.splashScreen.hide();
  // this.slides.centeredSlides = true;
  setTimeout(() => {
    this.splashScreen.hide();
    // this.viewCtrl.dismiss();
  }, 4000);
}
}
