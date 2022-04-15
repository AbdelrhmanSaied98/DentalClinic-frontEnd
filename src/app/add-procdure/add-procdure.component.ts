import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-procdure',
  templateUrl: './add-procdure.component.html',
  styleUrls: ['./add-procdure.component.css']
})
export class AddProcdureComponent implements OnInit {
  name:any = '';
  price:any = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.name != null && this.price != null)
    {
      this.http.post('https://dental-clinic-back.herokuapp.com/api/procedure',{'name' : this.name,'price':this.price
      }).subscribe((data:any)=>
      {
        this.name = '';
        this.price = '';

        alert('done');
      });
    }
  }

}
