import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/Auth.service";

@Injectable()
export class AuthIntercepteur implements HttpInterceptor{
  constructor(private AuthService:AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header=new HttpHeaders()
      .append('Authorization',`bearer ${this.AuthService.getToken()}`);
    const modifiedRequest = req.clone({ headers:header })
    return next.handle(modifiedRequest)
  }

}
