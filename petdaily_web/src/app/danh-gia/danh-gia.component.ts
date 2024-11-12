import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-danh-gia',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './danh-gia.component.html',
  styleUrl: './danh-gia.component.css'
})
export class DanhGiaComponent {

}
