import 'hammerjs';
import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { AgmCoreModule } from '@agm/core';

import {MapComponent} from './../map/map.component'
import { DataService } from '../services/dataService/data-service';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyAFWNNji1j8iSjNhBOtqkjOVJZY7wB5pp4'
    }),
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    HttpClientModule

  ],
  providers: [
    DataService,
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    MapComponent
  ]
})

export class MaterialComponentsModule {}
