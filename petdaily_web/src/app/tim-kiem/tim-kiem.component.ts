import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tim-kiem',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tim-kiem.component.html',
  styleUrl: './tim-kiem.component.css'
})
export class TimKiemComponent {

}
