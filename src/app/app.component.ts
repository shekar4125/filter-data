import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  newArray:any = [];
 
  employees = [
    {
      empName: 'pavan',
      empId: 305,
      department: 'IT',
      doj: '01/02/2022',
      phoneNumber: '88888888888',
      emailId: 'pavan@gmail.com'
    },
    {
      empName: 'raj',
      empId: 306,
      department: 'Mech',
      doj: '2/02/2022',
      phoneNumber: '999999999',
      emailId: 'raj@gmail.com'
    },
    {
      empName: 'teja',
      empId: 307,
      department: 'civil',
      doj: '03/02/2022',
      phoneNumber: '7777777777',
      emailId: 'teja@gmail.com'
    },
    {
      empName: 'arun',
      empId: 308,
      department: 'ece',
      doj: '05/02/2022',
      phoneNumber: '66666666',
      emailId: 'arun@gmail.com'
    }
  ]

  records:any = [];


  constructor(private dataService: DataService){

  }

  ngOnInit(){
   this.getPosts();
  }

  getPosts(){
    this.dataService.getPosts().subscribe(
      (response:any) => {
        console.log(response);
        this.records = response;
        this.newArray = response;
        // this.records[0].body = '5555'
      },
      (error) => {
        console.log(error)
      }
    )
  }


  filterData(event:any){
    console.log(event.target.value);

  this.records =  this.filterBooks(event.target.value)
   

  }

filterBooks(value:any){
 return this.newArray.filter((book:any) => {
    return book.title.includes(value) || book.body.includes(value);
  })
}
}

// export interface Post {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// }