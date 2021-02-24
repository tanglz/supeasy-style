import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.httpS.register(this.validateForm.value).subscribe(res=>{

      //console.log(res);
      //todo: denpending response status then navigate to login page
      this.router.navigateByUrl('login')
    });
  }

  constructor(private fb: FormBuilder, private httpS:HttpService, private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
      storeName:[null, [Validators.required]],
      address: [null, [Validators.required]],
      description: [null, [Validators.required]],
  
    });
  }
}
