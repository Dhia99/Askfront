import { FormGroup } from "@angular/forms";
export function MustMatch(controlName:string,matchingcontrolName:string){
     return (formGroup:FormGroup)=>{
       const control = formGroup.controls[controlName];
       const matchingControl = formGroup.controls[matchingcontrolName];
       if(matchingControl.errors && !matchingControl.errors.MustMatch){
         return;
       }
       if(control.value !== matchingControl.value){
           matchingControl.setErrors({MustMatch:true});
      }else{
        matchingControl.setErrors(null);
      }

     }
}
