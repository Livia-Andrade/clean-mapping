import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  title = 'Cadastro';

  hide = true;
  
  cadForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.cadForm = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Cpf: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Image: new FormControl(''),
    });
  }

  
  get Name() {
    return this.cadForm.get('Name')!;
  }

  get Username() {
    return this.cadForm.get('Username')!;
  }
  
  get Cpf() {
    return this.cadForm.get('Cpf')!;
  }

  get Password() {
    return this.cadForm.get('Password')!;
  }

  submit() {

    if (this.cadForm.invalid) {
      return;
    }

    // TODO: Use EventEmitter with form value
    console.log("Enviou fomulario");

  }

}
