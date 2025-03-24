import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

//create a helper function to display the users randomly 
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//to display the data of the users, implement this class
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]

  //create a function that act as a property 
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  }
}
