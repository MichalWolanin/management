import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule,DialogModule, ButtonModule, InputTextModule,FormsModule, DropdownModule],

  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})

export class SummaryComponent {
  visible = false;
  showDialog() {
    if(this.visible == false){
      this.visible = true;
    }else this.visible = false;
  }

  items: SelectItem[];

  selectedItem: string | undefined;

  constructor() {
      this.items = [];
      for (let i = 0; i < 20; i++) {
          this.items.push({ label: 'Table ' + i, value: 'Table ' + i });
      }
  }
}

