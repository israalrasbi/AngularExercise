import { Component } from "@angular/core";

//add Component decorator that will add metadata and configrations
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
  })
//need to add the keyword export, so other classes can use it
export class HeaderComponent {}