import { CommonModule } from '@angular/common';
import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from '../../Components/user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // ------- Http & Services ------- //
  imports: [CommonModule, HttpClientModule, UserComponent],
  providers: [UsersService],
  // ------------------------------- //
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  users: any = [];

  constructor(private usersService: UsersService, private router: Router) {}

  navigateToAddPage() {
    this.router.navigate(['/add']);
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users: []) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
