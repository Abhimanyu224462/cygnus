import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-create-f',
  templateUrl: './create-f.component.html',
  styleUrls: ['./create-f.component.scss']
})
export class CreateFComponent {



constructor(private fb:FormBuilder, private http:HttpService, private activateRoute:ActivatedRoute, private routes:Router){
  this.stuSelectedID = this.activateRoute.snapshot.paramMap.get('sID')
  console.log("Id recieved in create form", this.stuSelectedID)

  this.actionRes = this.activateRoute.snapshot.queryParamMap.get('action')
}
// DECLARATION
stuRegForm!:FormGroup
stuSelectedID:string|null = null
actionRes:string|null = null

//FORM STRUCTURE

ngOnInit(){
  this.stuRegForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]{2,50}')]],
    class:['',[Validators.required,Validators.pattern('([1-9]|1[0-2])$')]],
    roll:['',[Validators.required,Validators.pattern('([1-9])+$')]],
    marks:['',[Validators.required,Validators.pattern('(100|[1-9]?[0-9])$')]],
    rank:['',[Validators.required,Validators.pattern('([0-9])+$')]],
    sex:['',[Validators.required]],
    city:['',[Validators.required]]

  })

this.getData()
}


// FUNCTIONS
save() {
 console.log("Student Data", this.stuRegForm.value)
  }

  submit(){
    if (this.actionRes === "EDIT"){
      this.putData()
    } else {
      this.postData()
    }
  }

// POST

postData(){
  this.http.postDataToServer('stuData',this.stuRegForm.value).subscribe({
    next:(response:any)=>{
      console.log("response recieved to post", response)
      const selection = confirm("Data Saved Successfully")
      if(selection){
        this.routes.navigate(['/displayF'])
      }
    }
  })
}



//PATCH
//GET

getData(){
  const endpoint = 'stuData/' + this.stuSelectedID
  this.http.getDataFromServer(endpoint).subscribe({
    next:(response:any)=>{
      console.log("got data of table in create form",response)
      this.stuRegForm.patchValue(response)
    }
  })

}

//PUT

putData(){
  const endpoint = 'stuData/' + this.stuSelectedID
  this.http.putDatatoServer(endpoint,this.stuRegForm.value).subscribe({
    next:(response:any)=>{
      console.log("data updated successfully")
      const selection = confirm("Data Saved Successfully")
      if(selection){
        this.routes.navigate(['/displayF'])
        this.getData()
      }
      
    }
  })
}



}
