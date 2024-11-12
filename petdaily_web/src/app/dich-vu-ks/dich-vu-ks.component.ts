import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dich-vu-ks',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './dich-vu-ks.component.html',
  styleUrl: './dich-vu-ks.component.css'
})
export class DichVuKSComponent {

}
