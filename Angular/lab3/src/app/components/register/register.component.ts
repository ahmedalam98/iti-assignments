import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import user from '../../Utils/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  id: number = 0;
  name: string = '';
  age: number | undefined = undefined;

  std: any = {};

  validName: boolean = true;
  validAge: boolean = true;

  @Output() toParent = new EventEmitter();

  adduser() {
    this.std.id = Math.floor(Math.random() * 100) + 1;
    this.std.name = this.name;
    this.std.age = this.age;

    this.validName = this.name.length >= 3;
    this.validAge = this.age !== undefined && this.age >= 15 && this.age <= 25;

    if (this.validName && this.validAge) {
      this.toParent.emit(this.std);
      // console.log(this.std);
      this.std = {};
    }
  }
}
