import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import { of } from 'rxjs';
import { Credentials } from 'src/models/credentials.model';
import {AuthenticationService} from '../../services/BaseServices/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('passwordText')  passwordText;
  @ViewChild('emailText')  emailText;
  @ViewChild('confirmPasswordText')  confirmPasswordText;
  faEyeSlash=faEyeSlash;
  hide = true;
  token:string;
  constructor(private auth:AuthenticationService, private router: Router) {
   }

  ngOnInit(): void {
  }

  mailAndPassword(emailText, passwordText, confirmPasswordText){
    if(passwordText!=confirmPasswordText){
      //POPUP
      return 0;
    }
    var formData = new FormData();
    var cred = new Credentials(emailText,passwordText);
    for(var key in cred){
      formData.append(key,cred[key]);
    }
    this.auth.Register(formData).subscribe(x=>{
      this.token = x;
    });
    if(this.token ==null){
      //POPUP
    }
    else{
      localStorage.setItem("token",this.token);
      this.router.navigate(['/home']);
    }
      this.emailText.nativeElement.value = '';
      this.passwordText.nativeElement.value = '';
      this.confirmPasswordText.nativeElement.value = '';
  }
}
