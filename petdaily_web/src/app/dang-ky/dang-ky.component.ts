import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dang-ky',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dang-ky.component.html',
  styleUrl: './dang-ky.component.css'
})
export class DangKyComponent {

}
