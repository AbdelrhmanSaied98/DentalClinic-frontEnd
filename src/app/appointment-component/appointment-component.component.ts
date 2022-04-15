import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
@Component({
  selector: 'app-appointment-component',
  templateUrl: './appointment-component.component.html',
  styleUrls: ['./appointment-component.component.css']
})
export class AppointmentComponentComponent implements OnInit {
  availableDate:any = [];
  choosedDate:any = '';
  choosedName:any = '';


  constructor(private http:HttpClient,private router: Router,private patientService: PatientServiceService) { }

  ngOnInit(): void {
    this.http.get('https://dental-clinic-back.herokuapp.com/api/clinicSchedule').subscribe((data:any)=>
    {
      this.availableDate = data;
      console.log(this.availableDate);
    });
    
  }
  onSubmit()
  {
    if(this.choosedDate != null && this.choosedName != null)
    {
      this.http.post('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.choosedName,{'clinic_schedule_id' : this.choosedDate
      }).subscribe((data:any)=>
      {
        this.patientService.changePatientName(this.choosedName);
        this.router.navigate(['/main']);
      },(error:any) =>
      {
        this.router.navigate(['/signup']);
      });
    }
  }

}
