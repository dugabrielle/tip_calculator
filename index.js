
function tipCalculator(){
    let yourBill = parseFloat(document.getElementById('yourBill').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    let splitPeople = parseFloat(document.getElementById('splitPeople').value);

    let billTotal = document.getElementById('billTotal');
    let tipTotal = document.getElementById('tipTotal');
    let billEach = document.getElementById('billEach');

    let totaltipBill = (yourBill * tipPercentage) / 100;
    let totalbillAmount = yourBill + totaltipBill;
    let totaleachBill = totalbillAmount / splitPeople;

    tipTotal.value = totaltipBill.toFixed(2);
    billTotal.value = totalbillAmount.toFixed(2);
    billEach.value = totaleachBill.toFixed(2);
}