import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  protected readonly name = signal('Tom');
  protected readonly surname = signal('Cat');
  protected readonly adress = signal ({number: 128, street: "Main" , zipcode: 12345, city: "New York" });

}
