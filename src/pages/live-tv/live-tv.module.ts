import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveTvPage } from './live-tv';

@NgModule({
  declarations: [
    LiveTvPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveTvPage),
  ],
})
export class LiveTvPageModule {}
