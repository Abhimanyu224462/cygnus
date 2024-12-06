import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe1'
})
export class Sortpipe1Pipe implements PipeTransform {

  transform(value: any, sortField:string): any {
//Adding + in front of variable will convert it into number from string
    return value.sort((a:any,b:any)=>{
      console.log("Sort pipe activated")
      if(+a[sortField] > +b[sortField] ){
        return 1
      } else if(+a[sortField] < +b[sortField] ){
        return -1
      } else {
        return 0
      }
      
    })

  }
  
}


    // return value.sort((a:any,b:any)=>{a[sortField]-b[sortField]})
    
//     return value.sort((a: any, b: any) => {
   
// //convert into numeric value
//       const valA = +a[sortField]
//       const valB = +b[sortField]


//       if (valA > valB) {
//         return 1;
//       } else if (valA < valB) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });

    // return value;


