import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//to display the data of the users, implement this class
export class UserComponent {
  @Input({required: true}) id !: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
   this.select.emit(this.id);
  } 
}
