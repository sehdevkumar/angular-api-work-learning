import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../shread/tasks.service';
import { tasks } from './task.file';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  getData:tasks;
  constructor(private service:TasksService) {
         this.service.getData()
         .subscribe(res=>{
           this.getData = res
         },err=>{
           alert("can't fetch data!")
         })
   }

  ngOnInit(): void {
  }
    

    title:string = ""
    author:string = ""
    
    obj:tasks;

    onAdd(myform:NgForm){
      this.obj = myform.value
      
      this.service.postData(this.obj)
      .subscribe(res=>{
            alert("Added!")
            this.service.getData()
            .subscribe(res=>{
            this.getData = res
            },err=>{
            alert("can't fetch data!")
            })
      },err=>{
            alert("Error!")
      })
      
      myform.reset()
    }


    delTask(id:Event){
       let ids:string = (<HTMLButtonElement>id.target).id
       this.service.getDeletePost(ids)
       .subscribe(res=>{
           alert('SuccessFully Deleted!')
           this.service.getData()
            .subscribe(res=>{
            this.getData = res
            },err=>{
            alert("can't fetch data!")
            })
       },err=>{
         alert("Error!")
       })
    }

   

}
