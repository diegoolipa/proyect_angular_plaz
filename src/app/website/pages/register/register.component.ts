import { Component, OnInit } from '@angular/core';
import {OnExit} from "../../../guards/exit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnExit {

  constructor() { }

  ngOnInit(): void {
  }

  onExit(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('estas seguro de salir');
  }

}
