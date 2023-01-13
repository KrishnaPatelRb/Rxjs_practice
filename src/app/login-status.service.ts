import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  public loginStatus=new BehaviorSubject<boolean>(false)
  constructor() { }
}
