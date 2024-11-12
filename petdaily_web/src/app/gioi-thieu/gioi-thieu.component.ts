import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-gioi-thieu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './gioi-thieu.component.html',
  styleUrl: './gioi-thieu.component.css'
})
export class GioiThieuComponent {

}
