import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-khuyen-mai',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './khuyen-mai.component.html',
  styleUrl: './khuyen-mai.component.css'
})
export class KhuyenMaiComponent {

}