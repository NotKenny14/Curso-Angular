import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameUpperCase: string = 'CARLOS ';
  public nameLowerCase: string = 'Carlos';
  public nameTitleCase: string = 'CaRlOs alArCOn';


  public customDate: Date = new Date();

}
