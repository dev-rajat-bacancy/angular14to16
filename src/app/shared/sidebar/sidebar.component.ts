import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private fb: FormBuilder){

    console.log(this.loginFormGroup.value);
    setTimeout(() =>{
      console.log(this.loginFormGroup.value);
      
    },3000)
  }
  @Input() pageName: any = '';  
  public loginFormGroup: FormGroup = this.fb.group({username:''})

}
