import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registere',
  templateUrl: './registere.component.html',
  styleUrls: ['./registere.component.scss'],
})
export class RegistereComponent implements OnInit {
  username: string;
  lastname: string;
  email: string;
  password: string;
  confirmpass: string;

  
  
  constructor() { }
register(){
  console.log("username: " +this.username);
  console.log("lastname: " +this.lastname);
  console.log("email: " +this.email);
  console.log("password: " +this.password);
  console.log("confrimpass: " +this.confirmpass);

}


  ngOnInit() {}

}

