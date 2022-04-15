import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
export interface PeriodicElement {
  id: number;
  date: string;
  time: number;
  visited: boolean;
}

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'time', 'visited'];
  dataSource :any = [];

  constructor(private http:HttpClient,private router: Router,private patientService: PatientServiceService) { }

  ngOnInit(): void {
    this.http.get('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getPatientName()).subscribe((data:any)=>
    {
      this.dataSource = data;
    });
  }

  onSubmit(id:any)
  {
    this.patientService.changeAppointmentID(id);
    this.router.navigate(['/visit']);
  }

}
