import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({});
  }

  userToUpdate: any = {};
  form: FormGroup;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUser(+userId).subscribe((user: any) => {
          this.userToUpdate = user;

          console.log('User to update:', this.userToUpdate);

          setTimeout(() => {
            this.initializeForm();
          }, 1000);
        });
      }
    });
  }

  initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.userToUpdate.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      age: new FormControl(this.userToUpdate.age, [
        Validators.required,
        Validators.min(20),
        Validators.max(40),
      ]),
      email: new FormControl(this.userToUpdate.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.userToUpdate.phone, [Validators.required]),
      city: new FormControl(this.userToUpdate.city, [Validators.required]),
    });
  }

  update(): void {
    if (this.form.valid) {
      const updatedUserData = { ...this.form.value, id: this.userToUpdate.id };
      this.userService.updateUser(updatedUserData).subscribe({
        next: () => {
          alert('Updated Successfully');
          this.router.navigateByUrl('/');
        },
        error: (error: any) => {
          console.error('Error updating user:', error);
        },
      });
    }
  }
}
