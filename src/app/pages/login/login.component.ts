import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : Login;

  constructor(private http:HttpClient, private router:Router){
    this.loginObj = new Login()
  }
  onLogin(){
    // debugger
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("log in success")
        localStorage.setItem("WebTocken", res.data.token)
        this.router.navigateByUrl('/dashbord')
        // console.log(a)
      }else{
        alert(res.message)
      }
    })
  }

}

export class Login{
  emailId :string;
  password : string;
  constructor(){
    this.emailId =''
    this.password = ''
  }
}
