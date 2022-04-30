
/*
 * Bài 1: tìm số nguyên dương bé nhất với s=1+2+3+...+n<10000
+Đầu vào
-Tạo 3 biến biến điếm count, biến tổng sum, và biến kết quả content
+Xử lý
dùng vòng lặp do...while
cho biến count chạy mỗi lần tăng 1 đơn vị
biến tổng =các biến count cộng lại cho đến khi không thoả điều kiện sum<=10000 thì kết thúc vòng lặp
+Đầu ra
Xuất thông báo tổng số nguyên dương bé nhất<10000
 */
var count =0;
var sum =0;
var content="";
do {
  count++;
  sum+=count;
}while(sum<=10000);
content+="<div> số nguyên dương bé nhất là: "+count+"<div/>";
document.getElementById("ketQua1").innerHTML=content;

/*
*Bài 2: tính tổng luỹ thừa
+Đầu vào:
Nhập n và x
+Xử lý
khai báo biến i chạy 1 đến n
biến luỹ thừa, biến tổng, biến thông báo kết quả content
dùng vòng lặp do... while
thực hiện phép tính luy thua=luy thua*số nhập x
tong=tong + luy thua
tăng i đến khi điều kiện i<= n thoát vòng lập
+Đầu ra
thông báo kết quả

 */
document.getElementById("tinhTong").onclick=function(){
  var nhapX=document.getElementById("nhapSoX").value*1;
  var nhapN=document.getElementById("nhapSoN").value*1;
var i=1;
var luyThua=1;
var tong=0;
var content="";
do{
  luyThua=luyThua*nhapX;
  tong=tong+luyThua;
  i++;
}while(i<=nhapN)
content+=tong;
document.getElementById("ketQua2").innerHTML=content;
};

/*
*Bài tập 3:Nhập n tính giai thừa
+Đầu vào
nhập số n
+Xử lý
khai báo biến điếm count, tổng giai thừa và biến xuất kết quả
dùng vòng lặp while
count thoả điều kiện <= số nhập vào thì thực hiện biểu thức
tong giai thua=tong giai thua*count
count tăng đến khi điều kiện sai thì thoát vòng lặp
+Đầu ra
xuất kết quả

 */
document.getElementById("tinhGiaiThua").onclick=function(){
var giaiThua=document.getElementById("nhapSo").value*1;

var tongGiaiThua=1;
var count =1;
var content="";
while(count<=giaiThua){
tongGiaiThua=tongGiaiThua*count;
count++;
content=tongGiaiThua;

}
document.getElementById("ketQua3").innerHTML=content;
};