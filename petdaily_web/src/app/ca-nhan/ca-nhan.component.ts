import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ca-nhan',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ca-nhan.component.html',
  styleUrl: './ca-nhan.component.css'
})
export class CaNhanComponent {

}
