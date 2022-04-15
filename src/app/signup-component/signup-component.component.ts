import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  name:any = '';
  age:any = '';
  phone:any = '';
  address:any = '';


  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(this.name != null && this.age != null && this.phone != null && this.address != null)
    {
      this.http.post('https://dental-clinic-back.herokuapp.com/api/patient',{
        'full_name' : this.name,
        'age':this.age,
        'phone' : this.phone,
        'address':this.address
      }).subscribe((data:any)=>
      {
        this.router.navigate(['']);
      });
    }
  }

}
