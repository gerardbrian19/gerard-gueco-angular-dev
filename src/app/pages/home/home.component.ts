import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
