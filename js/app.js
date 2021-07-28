'use strict';
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}
const cashback = calculateCashback(5000, 10000);
console.log(cashback);
//function handleClick(evt) {
//    debugger;
//}

//const formEl = document.getElementById('cashback-form');
//formEl.onclick = handleClick;
function handleSubmit(evt) {
    evt.preventDefault();

    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = specialAmountInputEl.value;
    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = otherAmountInputEl.value;
}

const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;
