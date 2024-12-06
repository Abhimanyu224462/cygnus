import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe1D'
})
export class Sortpipe1DPipe implements PipeTransform {


  transform(value: any, sortFieldD:string): any {
    //  if(!value || !sortField) return value
  
      return value.sort((a:any,b:any)=>{
        console.log("Sort pipe activated")
        if(+a[sortFieldD] > +b[sortFieldD] ){
          return -1
        } else if(+a[sortFieldD] < +b[sortFieldD] ){
          return 1
        } else {
          return 0
        }
        
      })
    }

}
