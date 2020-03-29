import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {TopbarModule} from '../topbar/topbar.module';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {TableViewComponent} from './table-view/table-view.component';
import {CalendarModule, InputMaskModule, InputTextModule, MessagesModule, TableModule, TooltipModule} from 'primeng';
import {AnnotationsService} from '../service/annotations.service';
import { AnnotationFormComponent } from './annotation-form/annotation-form.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, TableViewComponent, AnnotationFormComponent],
    imports: [
        CommonModule,
        TopbarModule,
        CardModule,
        TabViewModule,
        TableModule,
        ReactiveFormsModule,
        InputTextModule,
        CalendarModule,
        InputMaskModule,
        MessagesModule,
        TooltipModule,
    ],
  providers: [
    AnnotationsService,
  ]
})
export class DashboardModule {
}
