import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent {
  userID: string | null = null;

  // Constructor is the first method that is called when the class is instantiated (( even before ngOnInit ))
  constructor(myuser: ActivatedRoute) {
    // console.log(myuser);
    this.userID = myuser.snapshot.paramMap.get('id');
  }
}
