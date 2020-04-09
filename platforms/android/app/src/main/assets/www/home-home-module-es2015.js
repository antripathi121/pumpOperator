(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-title>\n      Pump Operator\n    </ion-title>\n    <ion-button (click)='logout()' class=\"logout\" slot=\"end\">\n    <ion-icon name=\"power\"></ion-icon>\n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <ion-card class=\"mainPump\">\n    <ion-item><span>POWER (ON/OFF)</span>\n      <ion-toggle slot=\"end\" value=\"power\" (ionChange)='power($event)'></ion-toggle>\n    </ion-item>\n\n    <img *ngIf='status==false' src=\"assets/gear-pump.jpg\" alt=\"\">\n    <img *ngIf='status' src=\"assets/gear-pump.gif\" alt=\"\">\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>Field 1</div>\n      </ion-col>\n      <ion-col>\n        <div>Field 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button (click)='presentModal()' style=\"position: relative;\" color=\"success\" expand='block'>\n    <ion-icon style=\"left: 10px; position: absolute;\" name=\"alarm\"></ion-icon>\n    <span>Schedule</span></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  max-height: 50px;\n}\n\nion-toolbar {\n  --background: rgba(5, 5, 5, 0.8) !important;\n  color: white;\n  height: 100%;\n}\n\nion-col > div {\n  background-color: #f7f7f7;\n  border: solid 1px #c0bfbf;\n  padding: 10px;\n  text-align: center;\n  height: 100px;\n}\n\nion-col {\n  padding: 0;\n}\n\n.mainPump img {\n  margin: 0 auto;\n  height: 150px;\n  width: 200px;\n}\n\n.mainPump ion-item {\n  --background: rgb(45, 204, 106);\n  height: 40px;\n  color: white;\n}\n\nion-title {\n  padding: 0;\n}\n\n.logout {\n  position: absolute;\n  right: -6px;\n  top: 8px;\n  --background: transparent;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG93bmxvYWRzL3B1bXAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0FDSUo7O0FERkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLFVBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogcmdiYSg1LCA1LCA1LCAwLjgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigxOTIsIDE5MSwgMTkxKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5pb24tY29se1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubWFpblB1bXAgaW1ne1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLm1haW5QdW1wIGlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IHJnYig0NSwgMjA0LCAxMDYpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi10aXRsZXtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dvdXR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC02cHg7XG4gIHRvcDogOHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDI0cHg7XG59IiwiaW9uLWhlYWRlciB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDUsIDUsIDUsIDAuOCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb2wgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYzBiZmJmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpblB1bXAgaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm1haW5QdW1wIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNDUsIDIwNCwgMTA2KTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sb2dvdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICB0b3A6IDhweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HomePage = class HomePage {
    constructor(router, modalController, user) {
        this.router = router;
        this.modalController = modalController;
        this.user = user;
        this.status = false;
    }
    ngOnInit() {
        let token = localStorage.getItem('token');
        if (token) {
            console.log(token);
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]
            });
            return yield modal.present();
            // const { data } = await modal.onWillDismiss();
            // console.log(data);
        });
    }
    // formData: FormData = new FormData();
    power(e) {
        this.status = !this.status;
        let value = this.status ? '1' : '0';
        // this.formData.append('flag', value); 
        console.log(value);
        this.user.power(value).subscribe(res => { console.log(res); });
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map