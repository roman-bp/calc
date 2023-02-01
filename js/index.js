const c1cm = document.querySelector('.screenMc1').innerText;
const p1p = document.querySelector('.screenPrice1').innerText;



console.log(c1cm);
console.log(p1p);




let btnCalc1 = document.querySelector('.btnCalc1');
btnCalc1.onclick = () => {

    const iPrice1 = document.querySelector('.inputPrice1').value;
    const iMc1 = document.querySelector('.inputMc1').value;
    const iPrice2 = document.querySelector('.inputPrice2').value;
    const iMc2 = document.querySelector('.inputMc2').value;
    const iPrice3 = document.querySelector('.inputPrice3').value;
    const iMc3 = document.querySelector('.inputMc3').value;
    const iPrice4 = document.querySelector('.inputPrice4').value;
    const iMc4 = document.querySelector('.inputMc4').value;
    const iPrice5 = document.querySelector('.inputPrice5').value;
    const iMc5 = document.querySelector('.inputMc5').value; 
    
    const s1 = document.querySelector('.s1').value; 

    document.querySelector('.s1').innerHTML = 1111;

    // document.querySelector('.screenMc1').innerHTML = iMc1;
    // document.querySelector('.screenPrice1').innerHTML = iPrice1;
    document.querySelector('.screenMc2').innerHTML = iMc2;
    document.querySelector('.screenPrice2').innerHTML = iPrice2;
    document.querySelector('.screenMc3').innerHTML = iMc3;
    document.querySelector('.screenPrice3').innerHTML = iPrice3;
    document.querySelector('.screenMc4').innerHTML = iMc4;
    document.querySelector('.screenPrice4').innerHTML = iPrice4;
    document.querySelector('.screenMc5').innerHTML = iMc5;
    document.querySelector('.screenPrice5').innerHTML = iPrice5;
    document.querySelector('.scrTotalPrice1').innerHTML = iPrice1 * iMc1 + iPrice2 * iMc2 + iPrice3 * iMc3+ iPrice4 * iMc4+iPrice5 * iMc5;
    // return iPrice1 * iMc1;
   
    console.log(dddd);



}


const sss = document.querySelector('.s1').innerText;

















// .compaund {
// }
//  {
// }
// .btn-mc {
// }
// .input-mc {
// }
// .screen-mc {
// }
// .compaund-price {
// }
// .btn-price {
// }
// .input-price {
// }
// .screen-price {
// }
// .scr-totalPrice {
// }