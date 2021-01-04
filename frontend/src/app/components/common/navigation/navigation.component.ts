import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/common/auth.service';
import { LogInDialogComponent } from '../log-in-dialog/log-in-dialog.component';
import  { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  constructor(
    public auth: AuthService,
    public dialog: MatDialog
  ) {

  }
  logIn(): void {
    const dialogRef = this.dialog.open(LogInDialogComponent, {
      width: '15.625em',
      data: {}
    });
    }

}
