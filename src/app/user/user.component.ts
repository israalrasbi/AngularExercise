import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]) ;

  //create a function that act as a property 
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar )

  //this function changes the user every time the button is clicked
  onSelectUser() {
   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
   this.selectedUser.set(DUMMY_USERS[randomIndex])
  } 
}
