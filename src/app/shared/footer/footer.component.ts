import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseenterDirective } from '../directives/grouped/mouseenter.directive';
import { consoleLogDecorator } from './logging.decorator';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  hostDirectives:[
    MouseenterDirective
  ]
})
export class FooterComponent {
  test(e:any){
    console.log(e);
    
  }

  @consoleLogDecorator 
  runDecorator(){
    console.log("I called");   
  }
}
