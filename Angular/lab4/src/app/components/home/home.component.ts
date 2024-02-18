import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  myRegForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),

    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(30),
    ]),
  });

  renderData: Boolean = false;

  get NameValid() {
    return this.myRegForm.controls['name'].valid;
  }
  get AgeValid() {
    return this.myRegForm.controls['age'].valid;
  }

  getData() {
    console.log(this.myRegForm.value);

    this.renderData = true;

    setTimeout(() => {
      this.renderData = false;
    }, 4000);
  }
}
