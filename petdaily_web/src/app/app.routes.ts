import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import { DatLichComponent } from './dat-lich/dat-lich.component';
import { TimKiemComponent } from './tim-kiem/tim-kiem.component';
import { CaNhanComponent } from './ca-nhan/ca-nhan.component';
import { DichVuCSComponent } from './dich-vu-cs/dich-vu-cs.component';
import { DichVuSGComponent } from './dich-vu-sg/dich-vu-sg.component';
import { DichVuKSComponent } from './dich-vu-ks/dich-vu-ks.component';
import { TinTucChiTietComponent } from './tin-tuc-chi-tiet/tin-tuc-chi-tiet.component';
import { authGuard } from './auth.guard';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { QuenMatKhau1Component } from './quen-mat-khau1/quen-mat-khau1.component';
import { QuenMatKhau2Component } from './quen-mat-khau2/quen-mat-khau2.component';

export const routes: Routes = [
  { path: 'trangChu', component: TrangChuComponent },
  
  { path: 'gioiThieu', component: GioiThieuComponent },
  { path: 'dichVu', 
    component: DichVuComponent,
    children: [
      {path: 'CS', component: DichVuCSComponent},
      {path: 'SG', component: DichVuSGComponent},
      {path: 'KS', component: DichVuKSComponent},
    ]
   },
  
  { path: 'khuyenMai', component: KhuyenMaiComponent },
  { path: 'lienHe', component: LienHeComponent },

  { path: 'tinTuc', component: TinTucComponent },
  { path: 'tinTuc/:id', component: TinTucChiTietComponent},

  { path: 'danhGia', component: DanhGiaComponent },
  { path: 'datLich', component: DatLichComponent },
  { path: 'timKiem', component: TimKiemComponent },

  { path: 'caNhan', component: CaNhanComponent,canActivate:[authGuard] },
  {path:'dangnhap', component:DangNhapComponent,
    children:[
      {path:'dangky',component:DangKyComponent},
      {path:'quenmatkhau',component:QuenMatKhau1Component,
        children: [{path:'quenmatkhau#',component:QuenMatKhau2Component}]
      }
    ]
  },

  { path: '', redirectTo: '/trangChu', pathMatch: 'full' },
  { path: '**', redirectTo: '/trangChu' } // Điều hướng wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
