import { CommonModule } from '@angular/common';
import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from '../../Components/user/user.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserComponent],
  providers: [UsersService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  requiredUser: any = {};

  constructor(
    private router: Router,
    private usersService: UsersService,
    private myUser: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myUser.paramMap.subscribe((params) => {
      const userId = params.get('id');

      if (userId) {
        this.usersService.getUser(+userId).subscribe((user: any) => {
          this.requiredUser = user;
        });
      }
    });
  }

  deleteReqUser(id: number) {
    this.usersService.deleteUser(id).subscribe(() => {
      alert('User deleted :(');
      this.router.navigate(['/']);
    });
  }

  navigateToUpdatePage(id: number) {
    this.router.navigate([`/update/${id}`]);
  }
}
