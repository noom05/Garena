import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = new FormControl('');
  password = new FormControl('');
  errorMessage = '';

  constructor(private router: Router, private auth: LoginService) {}

  onSubmit() {
    console.log('กำลังเข้าสู่ระบบ...');
  const emailValue = this.email.value?.trim() || '';
  const passwordValue = this.password.value?.trim() || '';

  if (!emailValue || !passwordValue) {
    this.errorMessage = 'กรุณากรอกอีเมลและรหัสผ่าน';
    return;
  }

  this.auth.login(emailValue, passwordValue).subscribe(success => {
    if (!success) {
      this.errorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
    }
  });
}

  
  goHome() {
    this.router.navigate(['/main']);
  }

  register() {
    this.router.navigate(['/pagenotfound']);
  }
}
