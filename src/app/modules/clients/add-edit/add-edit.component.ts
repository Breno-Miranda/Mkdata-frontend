import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'

import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})


export class AddEditComponent implements OnInit {

  formClient!: FormGroup;
  contatcs: any = FormArray;

  constructor(

    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {


    this.formClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
      rgie: ['', Validators.required],
      isactive: [false, Validators.nullValidator],
      phones: this.formBuilder.array([]),
    });

    this.contatcs = this.formClient.get('phones') as FormArray;

    this.activatedRoute.params.subscribe(params => {

      if (params['id']) {

        this.clientsService.getId({ id: params['id'] }).subscribe(data => {
          this.formClient = this.formBuilder.group({
            name: [data[0].name],
            type: [data[0].type],
            cpfcnpj: [data[0].cpfcnpj],
            rgie: [data[0].rgie],
            isactive: [data[0].isactive],
            phones: this.formBuilder.array([]),
          });

          this.contatcs = this.formClient.get('phones') as FormArray;
        });

        this.clientsService.getFilterPhone({ id: params['id'], limit: 999 }).subscribe(data => {
          data.forEach(item => {
            let formGroup: FormGroup = this.formBuilder.group({
              id: item.id,
              ismain: [item.ismain, Validators.nullValidator],
              areacode: [item.areacode, Validators.required],
              phone: [item.phone, Validators.required],
            });
            this.contatcs.push(formGroup)
          });
          console.log(this.contatcs.controls);
        });
      }
    });

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

    this.activatedRoute.params.subscribe(params => {

      if (params['id']) {
        this.clientsService.update(this.formClient.value, params['id']).pipe(first()).subscribe((data: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.router.navigate(['/clientes']);
          }, 1500);
        }, error => {
          console.log(error);
        });
      } else {
        this.clientsService.create(this.formClient.value).pipe(first()).subscribe((data: any) => {
          Swal.fire({
            position: 'top-end',
            icon: data.error ?  'error' : 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          });

          if(!data.error){
            setTimeout(() => {
              this.router.navigate(['/clientes']);
            }, 1500);
          }
        }, error => {
          console.log(error);
        });
      }
    });

  }

}
