import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dich-vu-sg',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dich-vu-sg.component.html',
  styleUrl: './dich-vu-sg.component.css'
})
export class DichVuSGComponent {

}
