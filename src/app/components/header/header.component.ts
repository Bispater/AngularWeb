import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    console.log("current user before ", this.currentUser);
  }

  logout() {
    // Limpiar la información del usuario en localStorage
    localStorage.removeItem('currentUser');
    this.currentUser = null; // Actualizar el modelo en el componente
  }

}
