import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})


export class AddEditComponent implements OnInit {

  contatcs: any = FormArray;

  formClient!: FormGroup;



  constructor(

    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formClient = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]],
      type: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
      rgie: ['', Validators.required],
      isactive: ['', Validators.nullValidator],
      phones: this.formBuilder.array([
        this.formBuilder.group({
          ismain: [false, Validators.nullValidator],
          areacode: ['', Validators.required],
          phone: ['', Validators.required],
        }),
      ]),
    });

    this.contatcs = this.formClient.get('phones') as FormArray;
  }

  get f() {
    return this.formClient.controls;
  }

  addContact() {

    let formGroup: FormGroup = this.formBuilder.group({
      ismain: [false, Validators.nullValidator],
      areacode: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.contatcs.push(formGroup);
  }

  onSubmit() {
    this.clientsService.create(this.formClient.value).pipe(first()).subscribe(data => {
      alert("cadastrado com sucesso.");
      this.router.navigate(['/clientes']);
    }, error => {
      console.log(error);
    });
  }

}
