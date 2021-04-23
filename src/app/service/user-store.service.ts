import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService implements OnInit {
  userDetails: UserDetails;
  userDetailsArray= [];

  constructor() { }

  ngOnInit() {
  }

  addUserToUserDetailsArray(user: UserDetails) {
    this.userDetailsArray.push(user);
  }

  findUser(findUser:string) {
    let searchUser = this.userDetailsArray.find((user, index, users) => {
        return user.username == findUser
    });    
    console.log("searched user= ",searchUser)
    return searchUser;
  }
}

export class UserDetails {
  username: string;
  usernumber: number
}
