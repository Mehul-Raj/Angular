import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  private router: Router


  constructor(private _storage: StorageService) { }
  userName: String;
  userRole: String;
  ngOnInit() {
    this.userName = this._storage.getSession("userName");
    this.userRole = this._storage.getSession("userRole");
  }
}

