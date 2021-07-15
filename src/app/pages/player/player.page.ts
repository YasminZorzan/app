import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { ModalController } from '@ionic/angular';
import { ModalFeedbackComponent } from 'src/app/components/modal-feedback/modal-feedback.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  constructor(private streamingMedia: StreamingMedia, private modal: ModalController) { }

  async presentModal() {
    const modal = await this.modal.create({
      component: ModalFeedbackComponent,
      cssClass: 'modal-feedback'
    });
    console.log("Abriu");
    return await modal.present();
  }
  
  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
    };
    this.streamingMedia.playVideo('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', options);
  }

  ngOnInit() {
    // this.presentModal();
  }

}
