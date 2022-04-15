import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  patientName = '';
  appointment_id = '';
  constructor() { }
  changePatientName(newName:any)
  {
    this.patientName = newName;
  }
  getPatientName()
  {
    return this.patientName;
  }

  changeAppointmentID(newName:any)
  {
    this.appointment_id = newName;
  }
  getAppointmentID()
  {
    return this.appointment_id;
  }
}
