import { Component, OnInit } from '@angular/core';

import {  FormControl, FormGroup} from '@angular/forms';
 
import { UserStoreService, UserDetails } from '../service/user-store.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userInputForm: FormGroup;
  constructor(private userStoreService:UserStoreService) { }

  ngOnInit(): void {
    this.userInputForm = new FormGroup({
        username: new FormControl(''),
        number : new FormControl('')
      }
    )
  }

  onSubmit() {
    let user = new UserDetails();
    user.name = this.userInputForm.get('username').value;
    user.userNumber = this.userInputForm.get('number').value;
    this.userStoreService.addUserToUserDetailsArray(user);
  }

}
