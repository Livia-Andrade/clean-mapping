import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {


  momentForm! : FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      Login: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Image: new FormControl(''),
    });
  }

  get Login(){
    return this.momentForm.get('Login')!;
  }

  get Password(){
    return this.momentForm.get('Password')!;
  }

  submit() {

    if (this.momentForm.invalid){
      return;
    }

    // TODO: Use EventEmitter with form value
    console.log("Enviou fomulario");

  }


}
