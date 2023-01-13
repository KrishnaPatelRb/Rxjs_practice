import { Component, Input, OnInit,AfterContentInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PasswordStrengthValidator} from "./passwordStrengthValidation"
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/app/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit,AfterViewInit {
  formNamer!: FormGroup;
  valueForOnchanges!: string;
  @Input() loginDisplayToggle:any
  loginshow:boolean=true
 
  
  constructor(private fb: FormBuilder, private router:Router,private loginStatusService:LoginStatusService ) { }

  ngOnInit(): void {
   
    this.formNamer = this.fb.group({
      // "" is a intial value
      'username': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.compose([
        Validators.minLength(8),
        Validators.required,
        PasswordStrengthValidator
      ]))
    })
   
    
    // this.formNamer.valueChanges.subscribe((data) => {
    //   this.valueForOnchanges = data.username
    // })

    
  }
  submit() {
    // // to get the value
    // console.log("Reactive forms value-", this.formNamer.value.username)
    //to check the validation
    if (this.formNamer.invalid) {
      alert("Error in login")
    }
    else{
      // this.loginDisplayToggle()
      localStorage.setItem("tokenForLogin","true")
      this.loginshow=false
      this.loginStatusService.loginStatus.next(true)
      this.router.navigate(['/Home'])
    }
    localStorage.setItem("tokenForLogin","true")
    this.loginshow=false
    this.loginStatusService.loginStatus.next(true)
    this.router.navigate(['/Rxjs'])
  }


  resetform(){
    this.formNamer.reset()
  }
 
  ngAfterViewInit() {
    setTimeout(() => {
      console.log('ff')
      let checkLoginstatus=localStorage.getItem("tokenForLogin")
      if(checkLoginstatus==="true"){
        this.loginStatusService.loginStatus.next(true)
        // this.loginshow=false
        this.router.navigate(['/Rxjs'])
      }
    }, 0);
    }
}