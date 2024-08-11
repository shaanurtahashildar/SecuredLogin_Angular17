import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit{


  users:any[]=[]
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getALLUsers()
  }

  getALLUsers(){
    debugger;
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any)=>{
      this.users=res.data
    }, error =>{ alert("intercepter not reco..............")});
    
  }
}
