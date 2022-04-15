import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedular-component',
  templateUrl: './schedular-component.component.html',
  styleUrls: ['./schedular-component.component.css']
})
export class SchedularComponentComponent implements OnInit {
  date:any = '';
  time:any = '';


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(this.date != null && this.time != null)
    {
      this.http.post('https://dental-clinic-back.herokuapp.com/api/clinicSchedule',{'date' : this.date,'time':this.time
      }).subscribe((data:any)=>
      {
        this.date = '';
        this.time = '';

        alert('done');
      });
    }
  }

}
