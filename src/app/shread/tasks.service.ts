import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { tasks } from '../task/task.file';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  postData(post:tasks){
      return this.http.post<tasks>('http://localhost:3000/posts',post) 
      .pipe(map((res:tasks)=>{
         return res;
      }))  
  }


  getData(){
     return this.http.get<tasks>('http://localhost:3000/posts')
     .pipe(
       map((res:tasks)=>{
         return res;
       })
     )
  }

  getDeletePost(id:string){
      return this.http.delete<tasks>(`http://localhost:3000/posts/${id}`)
      .pipe(map(res=>{
        return res;
      }))
  }

  getPostById(id:string){
      return this.http.get<tasks>(`http://localhost:3000/posts/${id}`)
      .pipe(map(res=>{
        return res;
      }))
  }

  postEditData(post:tasks,id:string){

      return this.http.put<tasks>(`http://localhost:3000/posts/${id}`,post)
      .pipe(map(res=>{
        return res;
      }))


  }
}
