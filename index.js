
function tipCalculator(){
    let yourBill = parseFloat(document.getElementById('yourBill').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    let splitPeople = parseFloat(document.getElementById('splitPeople').value);

    let billTotal = document.getElementById('billTotal');
    let tipTotal = document.getElementById('tipTotal');
    let billEach = document.getElementById('billEach');

    let totaltipBill = (yourBill * tipPercentage) / 100;
    let totalbillAmount = yourBill + totaltipBill;
    let totaleachBill = totaltipBill / splitPeople;

    tipTotal.value = totaltipBill;
    billTotal.value = totalbillAmount;
    billEach.value = totaleachBill;
}