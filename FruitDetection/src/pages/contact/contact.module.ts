import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ContactPage } from './contact';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    PipesModule,
  ],
  exports: [
    ContactPage,
  ],
})
export class ContactPageModule {}
