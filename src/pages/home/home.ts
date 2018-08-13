import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeStorage: NativeStorage) {
    
  }

  goBedRoom(){
    this.navCtrl.push('PhotoPage',{'photoId':"bedroom"})
   }

   goOutSide(){
    this.navCtrl.push('PhotoPage',{'photoId':"outside"})
   }

   goDining(){
    this.navCtrl.push('PhotoPage',{'photoId':"dining"})
   }

   goAll(){
    this.navCtrl.push('GalleryPage')
   }
}

 
 


