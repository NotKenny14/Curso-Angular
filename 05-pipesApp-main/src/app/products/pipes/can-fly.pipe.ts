import { Pipe, PipeTransform } from '@angular/core';

//canFly = false | canFly = No vuela
//canFly = true | canFly = Vuela

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: string): 'vuela' | 'no vuela' {
    return value ? 'vuela' : 'no vuela'
  }

}
