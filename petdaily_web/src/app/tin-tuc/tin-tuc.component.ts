import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TinTuc, TtService } from '../service/tt.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tin-tuc',
  standalone: true,
  imports: [CommonModule,HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './tin-tuc.component.html',
  styleUrl: './tin-tuc.component.css'
})
export class TinTucComponent implements OnInit{
  dsTinTuc: TinTuc[] = []; // Dữ liệu bài viết
  pageSize = 6;            // Số bài viết hiển thị trên mỗi trang
  currentPage = 1;         // Trang hiện tại
  totalPages = 0;          // Tổng số trang

  constructor(private ttService: TtService) { }

  ngOnInit(): void {
    // Sử dụng Sêrvice để lấy dữ liệu từ file JSON
    this.ttService.getTinTuc().subscribe(data => {
      this.dsTinTuc = data;
      this.totalPages = Math.ceil(this.dsTinTuc.length / this.pageSize); // Tính tổng số trang
    });  
  }

  // Getter để lấy dữ liệu cho trang hiện tại
  get pagedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.dsTinTuc.slice(startIndex, endIndex); // Cắt mảng dữ liệu theo trang
  }

  // Phương thức chuyển sang trang mới
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
