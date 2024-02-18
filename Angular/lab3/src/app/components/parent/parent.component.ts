import { TableComponent } from './../table/table.component';
import { RegisterComponent } from './../register/register.component';
import { Component } from '@angular/core';
import user from '../../Utils/user';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RegisterComponent, TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  allusers: user[] = [];

  getuserData(event: any) {
    console.log(event);

    this.allusers.push(event);
    console.log(this.allusers);
  }
}
