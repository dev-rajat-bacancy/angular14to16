import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleStandalone',
  standalone: true
})
export class DoubleStandalonePipe implements PipeTransform {

  transform(value: number): unknown {
    return value*2;
  }

}
