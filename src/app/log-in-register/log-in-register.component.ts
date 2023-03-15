import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import { Credentials } from 'src/models/credentials.model';
import {AuthenticationService} from '../../services/BaseServices/authentication.service';
@Component({
  selector: 'app-log-in-register',
  templateUrl: './log-in-register.component.html',
  styleUrls: ['./log-in-register.component.css']
})
export class LogInRegisterComponent implements OnInit {
  @ViewChild('passwordText')  passwordText;
  @ViewChild('emailText')  emailText;
  faEyeSlash=faEyeSlash;
  hide = true;
  token:string;
  constructor(private auth:AuthenticationService, private router: Router) {
   }

  ngOnInit(): void {
  }

  mailAndPassword(emailText, passwordText){
    var formData = new FormData();
    var cred = new Credentials(emailText,passwordText);
    for(var key in cred){
      formData.append(key,cred[key]);
    }

    this.auth.LogIn(formData).subscribe(x=>{
      this.token = x;
    });
    
    if(this.token == null){
      //CREATE POPUP
      return 0;
    }
    else{
      localStorage.setItem("token",this.token);
      this.emailText.nativeElement.value = '';
      this.passwordText.nativeElement.value = '';
      this.router.navigate(['/home']);
    }
  }
}
