import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dat-lich',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dat-lich.component.html',
  styleUrl: './dat-lich.component.css'
})
export class DatLichComponent {
  handleFormSubmit(event: Event): boolean {
    event.preventDefault();
    if (this.validateForm()) {
      const successMessage = document.getElementById('successMessage');
      const form = document.getElementById('appointmentForm');
      if (successMessage && form) {
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
      }
      return false;
    }
    return false;
  }

  validateForm(): boolean {
    const requiredFields = [
      'name', 'phone', 'email', 'service', 'method', 'date', 'time'
    ];

    let isValid = true;

    requiredFields.forEach(fieldId => {
      const element = document.getElementById(fieldId) as HTMLInputElement | HTMLSelectElement;
      if (element && !element.value) {
        element.classList.add('missing'); // Thêm lớp CSS để làm nổi bật ô trống
        isValid = false;
      } else if (element) {
        element.classList.remove('missing'); // Xóa lớp CSS nếu đã nhập
      }
    });

    return isValid;
  }

  validatePhoneNumber(): void {
    const phoneField = document.getElementById('phone') as HTMLInputElement;
    if (phoneField) {
      phoneField.value = phoneField.value.replace(/[^0-9]/g, ''); // Xóa tất cả ký tự không phải số
    }
  }

  toggleOptions(): void {
    console.log("toggleOptions called");
  }

  toggleAddressField(): void {
    // Xử lý hiển thị trường nhập địa chỉ khi chọn hình thức là "Tại nhà"
    console.log("toggleAddressField called");
    const addressField = document.getElementById("home_address") as HTMLInputElement;
    const methodSelect = document.getElementById("method") as HTMLSelectElement;
    
    if (addressField && methodSelect) {
      if (methodSelect.value === "home") {
        addressField.classList.remove("hidden");
      } else {
        addressField.classList.add("hidden");
      }
    }
  }


}
