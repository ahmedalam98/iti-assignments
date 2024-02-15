import { TableComponent } from './../table/table.component';
import { RegisterComponent } from './../register/register.component';
import { Component } from '@angular/core';
import Student from '../../Utils/Student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RegisterComponent, TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  allStudents: Student[] = [];

  getStudentData(event: any) {
    console.log(event);

    this.allStudents.push(event);
    console.log(this.allStudents);
  }
}
