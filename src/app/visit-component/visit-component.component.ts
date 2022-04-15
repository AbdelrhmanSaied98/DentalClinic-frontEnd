import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
@Component({
  selector: 'app-visit-component',
  templateUrl: './visit-component.component.html',
  styleUrls: ['./visit-component.component.css']
})
export class VisitComponentComponent implements OnInit {
  choosedType:any = '';
  availableDate:any = ['Examination','Consultation'];

  displayedColumns: string[] = ['name', 'price'];
  dataSource :any = [];
  dataSourceAssessment :any = [];
  showBill = false;
  showAssessment = false;
  displayedColumnsAssessment: string[] = ['diagnosis', 'prescription','lab'];
  constructor(private http:HttpClient,private router: Router,private patientService: PatientServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.http.post('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getAppointmentID()+'/visit',{
    'type':this.choosedType
    }).subscribe((data:any)=>
    {
      this.http.get('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getAppointmentID()+'/visit/getReceipt').subscribe((data:any)=>
        {
          this.showBill = true;
          var dataSource:any = [];
          const keys = Object.keys(data);
          keys.forEach((key, index) => {
            dataSource.push({'name':key,'price':data[key]});
          });
          this.dataSource = dataSource;
        });
    });
  }
  back()
  {
    this.router.navigate(['/main']);
  }
  addProcedure()
  {
    this.router.navigate(['/procedure']);
  }
  getDocotorAssessment()
  {
    this.http.post('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getAppointmentID()+'/visit/doctorAssessment',{
    'diagnosis':'lorem',
    'prescription':'lorem',
    'lab':'lorem'
    }).subscribe((data:any)=>
    {
      this.http.get('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getAppointmentID()+'/visit/doctorAssessment').subscribe((data:any)=>
        {
          this.showAssessment = true;
          this.dataSourceAssessment = data;
        });
    });
  }

}
