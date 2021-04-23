import { Component, OnInit } from '@angular/core';

import {  FormControl, FormGroup, Validators} from '@angular/forms';
 
import { UserStoreService, UserDetails } from '../service/user-store.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  title = 'Add Contact List';
  userInputForm: FormGroup;
  constructor(private userStoreService:UserStoreService) { }

  ngOnInit(): void {
    this.userInputForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        usernumber : new FormControl('', [Validators.required])
      }
    )
  }

  onSubmit() {
    let user = new UserDetails();
    user.username = this.userInputForm.get('username').value;
    user.usernumber = this.userInputForm.get('usernumber').value;
    this.userStoreService.addUserToUserDetailsArray(user);
  }

}
