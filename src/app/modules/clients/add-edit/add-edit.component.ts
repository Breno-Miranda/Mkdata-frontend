import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})


export class AddEditComponent implements OnInit {

  contatcs: any = [];

  formClient!: FormGroup;



  constructor(

    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {

    this.formClient = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });

  }

    // convenience getter for easy access to form fields
    get f() {
      return this.formClient.controls;
    }

  addContact(){
    this.contatcs.push({
      'ismain':0,
      'areacode': '',
      'phone': '',
    });

    console.log(this.contatcs);
  }

  onSubmit(){
    console.warn(this.formClient.value);
    console.log(this.contatcs);
  }

}
