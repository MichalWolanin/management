import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initFlowbite } from 'flowbite';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, BreadcrumbComponent, SummaryComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Restaurant Management';

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
