Em có vài tip sau:
1. khi đang làm việc ở nhánh A, mà trên remote nhánh A đã update nhiều, nếu pull code về sẽ bị conflict (những file mà mình không thay đổi)
git stash (lưu những thay đổi của mình trước)
git reset --hard origin/A (lấy mới nhất của branch A)
Bình thường trước đây mình sẽ stash, xong delete branch, rồi checkout lại branch đó
2. git checkout - (switch qua lại giữa hai branch)
3. git stash --keep-index -u (chỉ stash những file unstaged - những file mà mình chưa git add)
4. Sử dụng ohmyzsh với plugin default là git
nó sẽ cho mình viết tắt (alias) những câu lệnh như
gaa (git add)
ggpull (git pull origin branch)
ggpush,
ggfl,
gco
Các bác có thể tìm cheatsheet của ohmyzsh về git
5. Sử dụng gitk tên file - để xem lịch sử commit của file - khá trực quan