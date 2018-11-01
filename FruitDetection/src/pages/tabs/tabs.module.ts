import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    PipesModule,
  ],
  exports: [
    TabsPage,
  ],
})
export class TabsPageModule {}
