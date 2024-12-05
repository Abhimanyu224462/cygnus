import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("pipe activated");
    // console.log("search text value in pipe",args);
    let filterData = []
    let searchName = args[0]
    searchName = searchName.toLowerCase()
    filterData = value.filter((el:any)=>el.name.toLowerCase().includes(searchName))
    return filterData 
  }

}
