const product1 = {
    screenMc1: document.querySelector('.screenMc1').textContent,
    screenPrice1: document.querySelector('.screenPrice1').textContent,
    scrTP: document.querySelector('.scrTotalPrice1').textContent,
    changeMc1(newMc1) {
        this.screenMc1 = newMc1;
    },
    changePrice1(newPrice1) {
        this.screenPrice1 = newPrice1;
    },
    totalPrice1() {
        let total = 0;
        total = this.screenMc1 * this.screenPrice1;
    }
}
console.log(product1.screenMc1);
product1.changeMc1(50);
console.log(product1.screenMc1);
let a = document.querySelector('.inputPrice1').value;
// let b = product1.changeMc1();


let btnPrice1 = document.querySelector('.btnPrice1');
product1.changePrice1(a) = btnPrice1.onclick;

console.log(product1.screenPrice1);

document.querySelector('.inputPrice1').value
// let btnPrice1 = document.querySelector('.btnPrice1');
// // btnPrice1.onclick = () => {
// //     const iPrice1 = document.querySelector('.inputPrice1').value;
// //     console.log(iPrice1);
// //     document.querySelector('.screenPrice1').innerHTML = iPrice1;
// //     return iPrice1;
// let btnPrice1 = document.querySelector('.btnPrice1');
// btnPrice1.onclick = product1.changePrice1(){
//     const iPrice1 = document.querySelector('.inputPrice1').value;
//     console.log(iPrice1);
//     document.querySelector('.screenPrice1').innerHTML = iPrice1;
//     return iPrice1;
// };


// document.querySelector('.screenPrice1').innerHTML = iPrice1;


// let btnMc1 = document.querySelector('.btnMc1');
// btnMc1.onclick = () => {
//     const iMc1 = document.querySelector('.inputMc1').value;
//     console.log(iMc1);
//     document.querySelector('.screenMc1').innerHTML = iMc1;
//     return iMc1;

// }

// //console.log(iMc1);
// let btnPrice1 = document.querySelector('.btnPrice1');
// btnPrice1.onclick = () => {
//     const iPrice1 = document.querySelector('.inputPrice1').value;
//     console.log(iPrice1);
//     document.querySelector('.screenPrice1').innerHTML = iPrice1;
//     return iPrice1;

// }
// let btnMc11 = document.querySelector('.btnMc11');
// btnMc11.onclick = () => {
//     const iMc11 = document.querySelector('.inputMc11').value;
//     console.log(iMc11);
//     document.querySelector('.screenMc11').innerHTML = iMc11;
//     return iMc11;

// }
// let btnPrice11 = document.querySelector('.btnPrice11');
// btnPrice11.onclick = () => {
//     const iPrice11 = document.querySelector('.inputPrice11').value;
//     console.log(iPrice11);
//     document.querySelector('.screenPrice11').innerHTML = iPrice11;
//     return iPrice11;

// }
// // //console.log(iMc1);
// // let btnPrice2 = document.querySelector('.btnPrice2');
// // btnPrice1.onclick = () => {
// //     const iPrice2 = document.querySelector('.inputPrice2').value;
// //     console.log(iPrice2);
// //     document.querySelector('.screenPrice2').innerHTML = iPrice1;
// //     return iPrice2;

// // }
// // function totalPrice1(a, b) {
// //     let aaa = document.querySelector('.screenMc1').textContent;
// //     let bbb = document.querySelector('.screenMc1').textContent;
// //     // console.log(a);
// //     return a * b;

// // }