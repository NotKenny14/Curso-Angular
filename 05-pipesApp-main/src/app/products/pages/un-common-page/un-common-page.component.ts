import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css']
})
export class UnCommonPageComponent {

  // i18nSelect
  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };


  changeName():void {
    this.name = 'Paola';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria','Pedro','Carlos'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }


  deleteClient() {
    this.clients.shift();
  }


  //KeyValue Pipe
  public person = {
    name: 'Carlos',
    age: 24,
    address: 'Xalapa, Veracruz'
  }


  //Asyn Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve ( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre';
    }, 3500);
  } )

}
