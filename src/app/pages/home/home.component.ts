import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly darkMode$: Observable<boolean>;

  constructor(private readonly darkModeService: DarkModeService) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  ngOnInit(): void {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
