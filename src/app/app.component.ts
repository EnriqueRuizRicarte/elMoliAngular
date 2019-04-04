import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElMoli';
  abierto: boolean;
  constructor(){

  }
  ngOnInit() {
    this.abierto = false;
  }
  

  slideMenu(){
    if(this.abierto){
      //Cerrar el slideNav
      this.closeNav();
      this.abierto = false;
    }else{
      this.openNav();
      this.abierto = true;
    }

  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }
}
