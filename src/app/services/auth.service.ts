import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
interface User{
  status:boolean;
  object:string;
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private https:HttpService,private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(parms:any) {
      
    return this.http.post<any>("http://springbootsupeasy-env.eba-wk98fipi.us-east-1.elasticbeanstalk.com/api/"+"user/login", parms)
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user.status) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user['token']));
                  localStorage.setItem('username', JSON.stringify(user['name']));
                  this.currentUserSubject.next(user);
              }
          
              return user;
          }));
         
  }

  logout() {
      // remove user from local storage to log user out
    //   if (this.currentUserSubject.value) {
    //       this.currentUserSubject.unsubscribe();
    //   }
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
