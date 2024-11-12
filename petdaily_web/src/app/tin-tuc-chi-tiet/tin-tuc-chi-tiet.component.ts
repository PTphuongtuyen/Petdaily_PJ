import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tin-tuc-chi-tiet',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tin-tuc-chi-tiet.component.html',
  styleUrl: './tin-tuc-chi-tiet.component.css'
})
export class TinTucChiTietComponent {}
