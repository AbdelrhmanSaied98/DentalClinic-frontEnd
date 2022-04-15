import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
@Component({
  selector: 'app-procdure-component',
  templateUrl: './procdure-component.component.html',
  styleUrls: ['./procdure-component.component.css']
})
export class ProcdureComponentComponent implements OnInit {
  choosedProcdure:any = '';
  availableProcdure:any = [];
  showBill = false;
  displayedColumns: string[] = ['name', 'price'];
  dataSource :any = [];
  constructor(private http:HttpClient,private router: Router,private patientService: PatientServiceService) { }

  ngOnInit(): void {
    this.http.get('https://dental-clinic-back.herokuapp.com/api/procedure').subscribe((data:any)=>
    {
      this.availableProcdure = data;
    });
  }
  add()
  {
    var myDiv = document.getElementById("form");
    let newSelect = document.createElement('select');
      newSelect.classList.value = 'form-control Procdure';
      newSelect.style.width = "50%";
      this.availableProcdure.forEach((newProcdure:any) => {
        let newOption = new Option(newProcdure.name+' - '+ newProcdure.price,newProcdure.id);
        newSelect.add(newOption);
      });
      myDiv!.appendChild(newSelect);
  }
  onSubmit()
  {
    var inputs = document.getElementsByClassName('Procdure');
    var procdures = [];
    for(var i = 0;i<inputs.length;i++)
    {
      var oneInput = inputs[i] as HTMLSelectElement
      procdures.push(oneInput.options[oneInput.selectedIndex].value);
    }
    console.log(procdures);
    this.http.post('https://dental-clinic-back.herokuapp.com/api/appointment/'+this.patientService.getAppointmentID()+'/visit/addProcedure',{
    'procedure_id':procdures
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

}
