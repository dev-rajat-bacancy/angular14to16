import { Component, OnInit, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
 
  @ViewChild('testRef', { read: ViewContainerRef, static: true })
  testRef!: ViewContainerRef;

  @ViewChild('tRef', { read: TemplateRef, static: true })
  tRef!: TemplateRef<any>;

  data = [
    { name: 'Mohit', age: 25 },
    { name: 'Krishn', age: 30 }
  ];

  constructor (){
    
  }

  ngOnInit() {
    this.testRef.createEmbeddedView(this.tRef,
      { bookName: 'Ramayan', writer: 'Valmiki', $implicit: 'Prayag' },
      {
        index: 0,
        injector: Injector.create({
          providers: [{ provide: 'data', useValue: this.data }]
        })
      });
  }

}
