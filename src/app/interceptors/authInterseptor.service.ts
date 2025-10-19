import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { every, tap } from "rxjs";

export function authInterseptors (req: HttpRequest<any>,next:HttpHandlerFn){
    let modifiedRequest=req;
    if (req.method=="POST"){
     modifiedRequest = req.clone({
        headers: req.headers.append("lan","fn")
     })
    }

    return next(modifiedRequest).pipe(
       tap(
        (event)=>{
            if(event.type==HttpEventType.Response){
                console.log(event)
                if (event.status==200){

                } else if (event.status==500){
                    
                }
            }
        }
       )
    )
}