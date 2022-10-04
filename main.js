// function nhapSoNguyen(){
//     const num = Number(prompt('nhap dtb: '));
//     return num;
// }
// function check(){
//     if(nhapSoNguyen()>=5){
//         console.log('dau');
//     } else{
//         console.log('rot');
//     }
// }
// check();

//tu duy 3

// function nhapCanh(){
//     let a = Number(prompt('nhap canh a: '));
//     let b = Number(prompt('nhap canh b: '));
//     let c = Number(prompt('nhap canh c: '));

//     return [a,b,c];
// }
// function handle(a, b, c){
//     return Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2);
// }
// function check(){
//     const tamGiac = nhapCanh();
//     if(handle(tamGiac[0],tamGiac[1],tamGiac[2]) ||
//     handle(tamGiac[1],tamGiac[0],tamGiac[2]) ||
//         handle(tamGiac[2],tamGiac[0],tamGiac[1])){
//             console.log('tam giac vuong')
//     } else {
//         console.log('khong phai tam giac vuong')
//     }

// }
// check();

//tu duy 4: bai 2
// function tinhTien(kw){
//     if(kw < 100){
//         console.log('tien phai tra: '+ kw*2000);
//     }
//     else {
//         if(kw < 200){
//             console.log('tien phai tra: '+ kw*2500);
//         } else{
//             console.log('tien phai tra: '+ kw*3500)
//         }
//     }
// }
// function nhapKw(){
//     let kW = Number(prompt('nhap vao so kw: '));
//     tinhTien(kW)

// }

// nhapKw();

//tu duy 5: bai 1

// function nhapHangSo(){
//     let a = Number(prompt('nhap a: '));
//     let b = Number(prompt('nhap b: '));
//     hangBacNhat(a,b);
// }
// function hangBacNhat(a, b){
//     if(a == 0){
//         if(b == 0){
//             console.log('ptrinh vo so nghiem');
//         } else {
//             console.log('ptrinh vo nghiem');
//         }
//     } else {
//         console.log('ptrinh co 1 nghiem duy nhat: x = '+ -b/a);
//     }
// }
// nhapHangSo();

function nhapHangSo() {
  let a = Number(prompt("nhap a: "));
  let b = Number(prompt("nhap b: "));
  let c = Number(prompt("nhap c: "));
  hamBacHai(a, b, c);
}

function hamBacHai(a, b, c) {
  let denta = b*b - 4*a*c;

  if (denta > 0) {
    let x1 = -b + (Math.sqrt(denta) / 2*a);
    let x2 = -b - (Math.sqrt(denta) / 2*a);
    console.log(`ptrinh co 2 nghiem: x1 = ${x1}, x2 = ${x2}`);
  } else if (denta == 0) {
    let x = (-b / 2) * a;
    console.log(`ptrinh co nghiem kep: ${x}`);
  } else {
    console.log("ptrinh vo nghiem");
  }
}
nhapHangSo();
