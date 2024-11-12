import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DvService } from '../service/dv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trang-chu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './trang-chu.component.html',
  styleUrl: './trang-chu.component.css'
})
export class TrangChuComponent implements OnInit{

  // goiDichVu: GoiDichVu[]=[];
  isLoading: boolean = true;

  constructor(private dvService: DvService) {}

  ngOnInit(): void {
    this.dvService.getGoiDichVu().subscribe({
      next: (data) => {
        if (data && data.goiDichVu) {
          // this.goiDichVu = data.goiDichVu.dichVuChoCho || []; // Kiểm tra dữ liệu có hợp lệ không
        }
        this.isLoading = false; // Tắt trạng thái loading khi có dữ liệu
      },
      error: (err) => {
        console.error('Lỗi khi lấy dữ liệu:', err);
        this.isLoading = false; // Tắt trạng thái loading khi có lỗi
      }
    });
  }

}
