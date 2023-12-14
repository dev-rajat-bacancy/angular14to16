import { Directive, Injector, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appViewContainerRef]',
  standalone: true,
})
export class ViewContainerRefDirective {

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }
  allStudents = [
    { name: 'Jai', age: 30 },
    { name: 'Arjun', age: 35 }
  ];
  ngOnInit() {
    this.vcRef.createEmbeddedView(this.templateRef, {}, {
      
      injector: Injector.create({
        providers: [{ provide: 'data', useValue: this.allStudents }]
      })
    })
  }

}
