import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from 'src/app/login-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
 

  constructor( private LoginStatusService:LoginStatusService , private router:Router ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("tokenForLogin")
    this.LoginStatusService.loginStatus.next(false)
    this.router.navigate(["/login"])
  }
}
