import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../../../services/common/auth.service';
import {
  MatDialogRef
} from '@angular/material/dialog';
import {
  MatSnackBar
} from '@angular/material/snack-bar'
import {
  User
} from '../../../models/common/user.model';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public dialogRef: MatDialogRef < LogInDialogComponent > ,
    private snack: MatSnackBar
  ) {}

  user = new User();

  logInForm: FormGroup;
  username: FormControl;
  password: FormControl;



  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.logInForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  onSubmit() {
    console.log(this.user)
    this.auth.login(this.user).subscribe(
      data => {
        this.auth.authenticate(data);
        this.dialogRef.close();
      },
      error => {
        switch (error.status) {
          case 403:
            this.password.setErrors({
              'incorrect': true
            });
            break;
          default:
            this.snack.open('An unknown error occured: ' + error.message, 'Report', {
              duration: 10000
            }).onAction().subscribe(
              data => {
                // TODO record error
                this.snack.open('Thanks!', '', {
                  duration: 1000
                });
              }
            );
        }
      }
    );

  }

}
