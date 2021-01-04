import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/common/user.model';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/common/user.service';
import { TOKEN_KEY, NAME_KEY } from 'src/app/app.config';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {


  constructor(
    private userService: UserService,
    private snack: MatSnackBar
  ) { }

    user = new User();

  userFormGroup: FormGroup;
    username: FormControl;
    displayName: FormControl;
    email: FormControl;
    password: FormControl;
    confirmPass: FormControl;

  ngOnInit() {
    this.userService.getUserByID().subscribe(data => {
      this.user = data;
    }, error => {
      // TODO handle errors
    });
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe(updatedUser => {
      this.snack.open('User Updated');
      this.user.password = null;
      this.confirmPass.reset();
      localStorage.setItem(TOKEN_KEY, updatedUser.token);
      localStorage.setItem(NAME_KEY, updatedUser.displayName);
    }, error => {
      // TODO handle error
      this.snack.open(error);
    });
    
  }



  createFormControls() {
    this.username = new FormControl('', [Validators.required, Validators.maxLength(100)]);
    this.displayName = new FormControl('', [Validators.required, Validators.maxLength(100)]);
    this.email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
    this.password = new FormControl('', Validators.required);
    this.confirmPass = new FormControl('', this.matchingPassword());
  }

  createForm() {
    this.userFormGroup = new FormGroup({
      username: this.username,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      confirmPass: this.confirmPass
    });
  }

  matchingPassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (this.password.value === control.value) {
        return null;
      } else {
        return {'nonMatching': {value: control.value}};
      }
    };
  }
}
