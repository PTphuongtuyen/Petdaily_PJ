import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dich-vu-cs',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dich-vu-cs.component.html',
  styleUrl: './dich-vu-cs.component.css'
})
export class DichVuCSComponent {

}
