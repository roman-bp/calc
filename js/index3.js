const c1cm = document.querySelector('.screenMc1').innerText;
const p1p = document.querySelector('.screenPrice1').innerText;



console.log(c1cm);
console.log(p1p);




let btnCalc1 = document.querySelector('.btnCalc1');
btnCalc1.onclick = () => {

    const iPrice1 = document.querySelector('.screenPrice1').innerHTML;
    const iMc1 = document.querySelector('.inputMc1').value;
    const iPrice2 = document.querySelector('.screenPrice2').innerHTML;
    const iMc2 = document.querySelector('.inputMc2').value;
    const iPrice3 = document.querySelector('.screenPrice3').innerHTML;
    const iMc3 = document.querySelector('.inputMc3').value;
    const iPrice4 = document.querySelector('.screenPrice4').innerHTML;
    const iMc4 = document.querySelector('.inputMc4').value;
    const iPrice5 = document.querySelector('.screenPrice5').innerHTML;
    const iMc5 = document.querySelector('.inputMc5').value;
    const iPrice6 = document.querySelector('.screenPrice6').innerHTML;
    const iMc6 = document.querySelector('.inputMc6').value;
    const iPrice7 = document.querySelector('.screenPrice7').innerHTML;
    const iMc7 = document.querySelector('.inputMc7').value;
    const iPrice8 = document.querySelector('.screenPrice8').innerHTML;
    const iMc8 = document.querySelector('.inputMc8').value;
    const iPrice9 = document.querySelector('.screenPrice9').innerHTML;
    const iMc9 = document.querySelector('.inputMc9').value;
    const iPrice10 = document.querySelector('.screenPrice10').innerHTML;
    const iMc10 = document.querySelector('.inputMc10').value;

    document.querySelector('.screenMc1').innerHTML = iMc1;
    document.querySelector('.screenPrice1').innerHTML = iPrice1;
    document.querySelector('.screenMc2').innerHTML = iMc2;
    document.querySelector('.screenPrice2').innerHTML = iPrice2;
    document.querySelector('.screenMc3').innerHTML = iMc3;
    document.querySelector('.screenPrice3').innerHTML = iPrice3;
    document.querySelector('.screenMc4').innerHTML = iMc4;
    document.querySelector('.screenPrice4').innerHTML = iPrice4;
    document.querySelector('.screenMc5').innerHTML = iMc5;
    document.querySelector('.screenPrice5').innerHTML = iPrice5;
    document.querySelector('.screenMc6').innerHTML = iMc6;
    document.querySelector('.screenPrice6').innerHTML = iPrice6;
    document.querySelector('.screenMc7').innerHTML = iMc7
    document.querySelector('.screenPrice7').innerHTML = iPrice7;
    document.querySelector('.screenMc8').innerHTML = iMc8;
    document.querySelector('.screenPrice8').innerHTML = iPrice8;
    document.querySelector('.screenMc9').innerHTML = iMc9;
    document.querySelector('.screenPrice9').innerHTML = iPrice9;
    document.querySelector('.screenMc10').innerHTML = iMc10;
    document.querySelector('.screenPrice10').innerHTML = iPrice10;
    document.querySelector('.scrTotalPrice1').innerHTML = iPrice1 * iMc1 + iPrice2 * iMc2 + iPrice3 * iMc3+ iPrice4 * iMc4+iPrice5 * iMc5+iPrice6 * iMc6+iPrice7 * iMc7+iPrice8 * iMc8+iPrice9 * iMc9+iPrice10 * iMc10;
    // return iPrice1 * iMc1;

}



















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