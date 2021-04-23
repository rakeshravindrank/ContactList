import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService implements OnInit {
  userDetails: UserDetails;
  userDetailsArray= [];

  constructor() { }

  ngOnInit() {
    this.userDetails = new UserDetails();
  }

  addUserToUserDetailsArray(user: UserDetails) {
    this.userDetailsArray.push(user);
    console.log("userDetailsArray = "+this.userDetailsArray.length);
  }
}

export class UserDetails {
  name: string;
  userNumber: number
}
