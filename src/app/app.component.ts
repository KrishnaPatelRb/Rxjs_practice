import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from './login-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular_practice';
  headershow!:boolean
 
   constructor(private router:Router, private loginStatusService:LoginStatusService){

   }

  ngOnInit(){
    // this.loadershow=true
    // setTimeout(() => {                                       //offfff
    //   this.loadershow=false
    //   this.loginshow=true
    // }, 3000);
    // this.router.navigate(['/login']);
    this.loginStatusService.loginStatus.subscribe(res=>{
      this.headershow=res
    })
    if(!this.headershow){
      this.router.navigate(['/login'])
    }
  }

  // loginDisplayToggle=()=>{
  //  this.loginshow=false
  //  this.headershow=true
  // }
}
