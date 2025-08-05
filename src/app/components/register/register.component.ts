import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private router: Router, private fb: FormBuilder){}
  @Input() user ='';
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username : ['',[Validators.required, Validators.maxLength(10)]],
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(6)]]
      
    })
    
  }

  onSubmit(){
    if(this.registerForm.valid){
      localStorage.setItem('username', this.registerForm.value.username)
    console.log(this.registerForm.value);
     this.router.navigate(['/notes'])
    }
   

  }

}
