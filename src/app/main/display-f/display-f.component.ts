import { Component } from '@angular/core';
import { SearchPipePipe } from 'src/app/pipes/search-pipe.pipe';
import { Sortpipe1Pipe } from 'src/app/pipes/sortpipe1.pipe';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-display-f',
  templateUrl: './display-f.component.html',
  styleUrls: ['./display-f.component.scss']
})
export class DisplayFComponent {

  constructor(private http: HttpService, private searchPipe: SearchPipePipe) {

  }

  // DECLARATION

  stuInfoRec!: any
  stuselectedID!: any
  id!: any
  searchName: string | null = "";
  noRecordsFound: any;
  sorting: string = ""
  sortingD: string = ""
  sortField: string = 'rank'
  sortFieldD: string = 'rank'

  ngOnInit() {
    this.getData()
  }

  //FUNCTIONS

  fetchID(id: any) {
    this.id = id
    console.log(id)
    this.deleteData()
  }

  //PIPES 

  noRecPipe() {
    const nameD = this.searchPipe.transform(this.stuInfoRec, this.searchName)
    if (nameD && nameD.length == 0) {
      this.noRecordsFound = true
    } else {
      this.noRecordsFound = false
    }
  }

  descending() {
    this.sortingD = this.sortFieldD
    console.log("descending activated")
  }

  ascending() {
    this.sorting = this.sortField
    console.log("ascending activated")
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

  //DELETE

  deleteData() {
    const selection = confirm("are you sure want to delete")
    if (selection) {
      const endpoint = 'stuData/' + this.id
      this.http.deleteDataFromServer(endpoint).subscribe({
        next: (response: any) => {
          console.log("data with ID" + this.id + "deleted")
          this.getData()
        }
      })
    }

  }

}
