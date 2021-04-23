import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDetails, UserStoreService } from '../service/user-store.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  title = "Search User"
  isSearchOn: boolean = false; 
  searchUser: UserDetails;
  
  constructor(private userStoreService: UserStoreService) { }

  ngOnInit(): void {
  }

  findUser(event:any) {
    this.isSearchOn = true;
    this.searchUser = this.userStoreService.findUser(event.target.value);
  }

}
 