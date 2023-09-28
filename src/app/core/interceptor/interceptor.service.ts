import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () =>{
          // this.loaderService.isLoading.next(false)
        }
      ),
      catchError((error) => this.herrorHandler(error))
    )
  }

  herrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      
      if (error.error instanceof ErrorEvent) {
        console.log('ERROR DE CLIENTE', error);
        // this.messageService.showError(error.error.message, 'top right');
      } else {
        // this.messageService.showError('ERROR DE SERVIDOR', 'top right');
        if (error.status == 0) {
          // this.messageService.showError('Servidor Detenido', 'top right');
        }
        else {
          // this.messageService.showError(error.error.mensaje, 'top right');
        }
      }
    } else {
      console.warn(error)
      // this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
    }
    return throwError(error);
  }

}
