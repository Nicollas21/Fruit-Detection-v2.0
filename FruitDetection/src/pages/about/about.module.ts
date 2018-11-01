import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    PipesModule,
  ],
  exports: [
    AboutPage,
  ],
})
export class AboutPageModule {}
