import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

// Định nghĩa kiểu dữ liệu
interface GoiDichVu {
  image: string;
  tenGoi: string;
  gia: string;
  moTa: string;
}

interface DvResponse {
  goiDichVu: GoiDichVu[];
}


@Injectable({
  providedIn: 'root'
})


export class DvService {

  private dataUrl = 'assets/data/ds_dv.json';

  constructor(private http: HttpClient) { }

  // Trả về kiểu dữ liệu rõ ràng và xử lý lỗi
  getGoiDichVu(): Observable<DvResponse> {
    return this.http.get<DvResponse>(this.dataUrl).pipe(
      catchError(error => {
        console.error('Có lỗi xảy ra khi tải dữ liệu:', error);
        return of({ goiDichVu: [] }); // Trả về một mảng trống khi có lỗi
      })
    );
  }
}