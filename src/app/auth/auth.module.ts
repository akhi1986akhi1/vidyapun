import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MatSnackBarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  imports: [
    FormsModule,
	MatTabsModule,
    ReactiveFormsModule,
	MatSnackBarModule,
	BrowserModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
