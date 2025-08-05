import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = localStorage.getItem('username');
  constructor(private router: Router){}


  ngOnInit():void{
    

  }
  notes(){
    this.router.navigate(['/notes'])
  }

  logout(){
    localStorage.removeItem('username')
    this.router.navigate([''])
  }
}
