import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-f',
  templateUrl: './create-f.component.html',
  styleUrls: ['./create-f.component.scss']
})
export class CreateFComponent {

 
constructor(private fb:FormBuilder){}
// DECLARATION
stuRegForm!:FormGroup


//FORM STRUCTURE

ngOnInit(){
  this.stuRegForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]{2,50}')]],
    class:['',[Validators.required,Validators.pattern('([1-9]|1[0-2])$')]],
    roll:['',[Validators.required,Validators.pattern('[0-9]')]],
    marks:['',[Validators.required,Validators.pattern('(100|[1-9]?[0-9])$')]],
    rank:['',[Validators.required,Validators.pattern('[0-9]')]],
    sex:['',[Validators.required]],
    city:['',[Validators.required]]

  })


}


// FUNCTIONS
save() {
 console.log("Student Data", this.stuRegForm.value)
  }

}
