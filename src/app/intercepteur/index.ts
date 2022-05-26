import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthIntercepteur} from "./Auth.Intercepteur";

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass:AuthIntercepteur, multi:true}
];
