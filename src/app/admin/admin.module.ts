import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

import { DoubleStandalonePipe } from '../shared/pipes/double-standalone.pipe';
import { DoublePipe } from '../shared/pipes/double.pipe';

import { ClassDirective } from '../shared/directives/class.directive';
import { ClassStandaloneDirective } from '../shared/directives/class-standalone.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { ViewContainerRefDirective } from 'src/app/shared/directives/view-container-ref.directive';

@NgModule({
  declarations: [
    FeedbackComponent, DoublePipe, ClassDirective, DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarComponent,
    DoubleStandalonePipe,
    ClassStandaloneDirective,
    SupportComponent,
    ViewContainerRefDirective
  ]
})
export class AdminModule { }
