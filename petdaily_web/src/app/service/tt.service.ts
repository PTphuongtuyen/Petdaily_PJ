import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TinTuc {
  maTinTuc: string;
  chuDe: string;
  tieuDeChinh: string;
  tomTat: string;
  ngay: string;
  hinh: string;
}

@Injectable({
  providedIn: 'root'
})
export class TtService {



  constructor(private http: HttpClient) { }

  getTinTuc(): Observable<TinTuc[]> {
    return this.http.get<TinTuc[]>('assets/data/ds_tt.json')
  }
}
