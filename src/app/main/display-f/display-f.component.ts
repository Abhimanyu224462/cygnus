import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-display-f',
  templateUrl: './display-f.component.html',
  styleUrls: ['./display-f.component.scss']
})
export class DisplayFComponent {

  constructor(private http: HttpService) { }

  // DECLARATIO
  
  stuInfoRec!: any


  ngOnInit() {
    this.getData()
  }

// GET

  getData() {
    this.http.getDataFromServer("stuData").subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          this.stuInfoRec = response
          console.log("student info recieved from db", this.stuInfoRec)
        }
      }
    })
  }




}
