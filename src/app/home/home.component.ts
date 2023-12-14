import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_CLIENT_TOKEN, HomeService } from './home.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: HTTP_CLIENT_TOKEN, useExisting: HttpClient }, HomeService]
})
export class HomeComponent {
    homeService = inject(HomeService);
    
    ngOnInit(){
      this.homeService.getData().subscribe((arg:any) => {
        console.log(arg);  
      });
    }
}
