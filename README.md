# Happy Kids - Inclusive Education Landing Page

Dự án Landing Page chính thức của **Cơ sở Giáo dục Hòa nhập Happy Kids**. Trang web được thiết kế với giao diện vô cùng dễ thương, tươi sáng nhưng vẫn đảm bảo tính chuẩn xác và chuyên nghiệp để phụ huynh yên tâm tham khảo dịch vụ.

## 🌟 Tính năng kỹ thuật nổi bật
- **Công nghệ cốt lõi:** Được xây dựng hầu như từ Vanilla HTML, CSS, JavaScript giúp tối ưu hóa hiệu năng, tốc độ tải cực kỳ nhanh.
- **Môi trường & Đóng gói:** Được quản lý source code và local server mạnh mẽ thông qua `Vite`.
- **Responsive Web Design:** Hiển thị và căn lề hoàn hảo trên đa thiết bị: Desktop (Máy tính), Tablet (Máy tính bảng) và Mobile (Điện thoại nhỏ).
- **Animation UX:** Chuyển động bong bóng nổi 3D, hiệu ứng lấp ló (fade-up) khi cuộn chuột nhờ `IntersectionObserver`.
- **Bảo mật bản quyền:** Đã kích hoạt khiên JS chống bôi đen văn bản, vô hiệu hóa phím tắt hệ thống để chặn DevTools (F12, Ctrl+U...).

## 🚀 Hướng dẫn cài đặt và chạy (Run Locally)

Môi trường yêu cầu: Thử nghiệm cần cài sẵn [Node.js](https://nodejs.org/) trong máy của bạn.

1. Clone dự án về máy của bạn:
   ```bash
   git clone https://github.com/congdinh73/happy_kid.git
   cd happy_kid
   ```
2. Cài đặt các thư viện cần thiết của Vite:
   ```bash
   npm install
   ```
3. Khởi động môi trường phát triển:
   ```bash
   npm run dev
   ```
   *Web sẽ mở ở host cục bộ có địa chỉ thường là: `http://localhost:5173`.*

Vite sẽ áp dụng cơ chế tự động tải lại (Hot Module Replacement) để cập nhật thay đổi ngay tức thì nếu bạn đổi mã nguồn.

## 📁 Cấu trúc thư mục

- `index.html` - Khung sườn tổng thể của trang web.
- `style.css` - Giao diện, thiết kế UI, hệ thống biến CSS (màu pastel nền nã), cùng với media-queries quy định dàn trang.
- `main.js` - Thao tác tương tác từ người dùng, bắt sự kiện và các tính năng bảo vệ bản quyền.
- `public/` - Thư mục lưu trữ assets cục bộ (ví dụ: Logo, hình nền Hero AI).

---
*© 2026 Xây dựng và Phát triển bởi AI Partner.*
