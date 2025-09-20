# Git
## Undo
**Undo Commit message** :

     Git commit --amend -m"message"

**File staging → working directory** 

    Git restore --staged <filename>
    Git restore --staged .


**File repository → working direct(un-commit)** :

    Git reset HEAD~1 : undo 1 commit
    Git reset HEAD~N : undo N commit (N commit gan nhat)

**Bỏ qua file/Folder để git không theo dõi**

    tạo .Ignore -> gõ những file yêu cầu Git bỏ qua không theo dõi -> file bỏ qua chuyển sang màu xám

## Branch
**Pull Code**
   
    Git pull origin main : *Lay code tu server ve*

**Branch**

    Git branch : xem DS nhanh
    Git branch <ten_branch > : tao nhanh moi
    Git checkout <ten_branch> : chuyen nhanh moi
    Git checkout -b <ten_branch> : vua tao, vua chuyen nhanh moi
    Git checkout -D <ten_branch> : xoa nhanh


# JavaScript
**Conventions**

    kebab-case: tên file
    camelCase: tên biến
    PascalCase: tên class

**Object** : Lưu trữ tập hợp các đối tượng

    let/const <ten_object> = {
    <thuoc_tinh>: <gia_tri>
    <thuoc_tinh> {
       <thuoc_tinh>: <gia_tri>, 
       }
     }

**Array : mảng**    

    Độ dài mảng: length
    Lấy phần tử theo index : [0], [1], [2] 

**Function** : hàm, là đoạn code được đặt
tên và có thể tái sử dụng, thực hiện
1 nhiệm vụ hoặc 1 tính toán cụ thể.
 
    function <nameFunction>() {
     // code
    }