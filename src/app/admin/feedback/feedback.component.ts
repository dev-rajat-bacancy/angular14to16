import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements AfterViewInit {
  protected test = false;
  testVal = 2;
  @ViewChild(SidebarComponent) childComponent!: SidebarComponent;

  constructor(

  ){
  }

  ngAfterViewInit() {
    this.childComponent.loginFormGroup.patchValue({username: 'Hacked'});  

  }
}
