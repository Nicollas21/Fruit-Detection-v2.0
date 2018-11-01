import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public img = '';

  constructor(public navCtrl: NavController, 
    private camera: Camera,
    private http: HttpClient) {

  }

  public getPicture(from) {

    const source = from === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM;

    const options: CameraOptions = {
      quality: 100,
      sourceType: source,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }).catch((err) => {
      console.error(err);
    });
  }

}
