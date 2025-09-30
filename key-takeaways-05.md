# Javascript
## Function Expression

**Function Declaration (khai báo hàm)**

```
function add(a, b) {
return a + b;
}
```

**Function Expression (biểu thức hàm)**
```
const add = function(a, b) {
return a + b;
};
```

## Lambda function (Arrow Function)
*là cách viết ngắn gọn hơn cho Function , sử dụng '=>'*
```
const add = (a, b) => {
    ;
};
```
**Cú pháp ngắn gọn nhất (implicit return)**
  
    const add = (a, b) => a + b;

# DOM
*- Cấu trúc này gọi là DOM
(Document Object Model)*

*- Mở cây này bằng cách bấm
phím F12 (hoặc chuột phải vào
vùng trống, chọn “Inspect”);
sau đó chọn tab “Element”*
```
example
<option value="usa">United States</option>
- <option : Thẻ mở
- value : Thuộc tính
- "usa" : Giá trị của thuộc tính
- United States : Text
- /option> : Thẻ đóng
```

## Thẻ tiêu chuẩn
*Demo tất tần tật các thẻ:
https://material.playwrightvn.com/035-DOM-elements.html*
**Thẻ Cấu Trúc Cơ Bản**
```
- <html>: Thẻ gốc của trang
- <head>: Chứa metadata: tiêu đề website, hiển thị Google
- <body>: Nội dung của cả website hiển thị
- <div>: Khối/container chung
- <span>: Inline container
- <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
```

**Thẻ Nội Dung:**
```
- <h1> đến <h6>: Tiêu đề
- <p>: Đoạn văn
- <a>: Liên kết
- <img>: Hình ảnh
- <ul>, <ol>, <li>: Danh sách
```

**Thẻ Form (Quan trọng cho Testing)**
```
- <form>: Biểu mẫu
- <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
- <button>: Nút bấm
- <select> và <option>: Dropdown
- <textarea>: Vùng văn bản nhiều dòng
```

# Selector

**XPath**
```
- Dùng được trong hầu hết các trường hợp (99.99%)
- Đa dạng, có khả năng tìm các phần tử khó
- Hơi dài
VD: //button[normalize-space() = ‘Add to cart’]
- Có 2 loại XPath :
 + Tuyệt đối: đi dọc theo cây DOM,bắt đầu bởi 1 /
 + Tương đối: tìm dựa vào đặc tính bắt đầu bởi 2 //
  VD : //tenthe[@thuoctinh=”gia tri”]
```
**CSS selector**
```
- Ngắn gọn, performance cao
- Dùng cho các trường hợp dễ tìm.
- Không linh hoạt bằng XPath
VD: .add-to-cart
```
**Playwright selector**
```
- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới “giống người dùng đang nhìn thấy gì”
VD: page.getByText(“Add to cart”);
```

# Playwright basic syntax
## test : Đơn vị cơ bản để khai báo một test
```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```

## step: Đơn vị nhỏ hơn test, để khai báo từng step của
*Lưu ý: step nên được map 1-1 với test case
để dễ dàng maintain*
```
await test.step('Tên step', async () => {
// Code here
});
```
### Navigate
```
await

page.goto('https://pw-practice.playwrightvn.c
om/');
```

### Locate
*Sử dụng page.locator(“<selector>”) để chọn phần tử trên trang*

    VD:page.locator(“//input[@id=’email’]”)

### Click
**Single click**
```
await page.locator("//button").click();
```
**Double click**
 
    await page.locator("//button").dblclick();

**Click chuột phải**

    page.locator("//button").click({button:'right'})

**Click chuột kèm bấm phím khác**

    page.locator("").click ({modifiers: ['Shift'],})

### Input

**Fill**

*Giống việc bạn paste content vào một ô input*
```
page.locator("//input").fill('Playwright Viet Nam');
```

**pressSequentially**

*Giống việc bạn gõ từng chữ cái vào ô input*
```
page.locator("//input").pressSequentially('Playwrigh
t Viet Nam', {
delay: 100,
});
```

### Radio/checkbox

**Lấy giá trị hiện tại đang là check hay không**
```
const isChecked =
page.locator("//input").isChecked();
```
**Check/ uncheck**
```
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

### Select
```
await page.locator('//select[@id=”country”]')
.selectOption({ label: 'USA' })
```

### Upload file

```
await page.locator("//input[@id='profile']")
.setInputFiles("<file-path>");
```