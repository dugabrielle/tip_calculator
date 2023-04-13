function tipCalculator(){
    let yourBill = parseInt(document.getElementById('yourBill').value);
    let tipPercentage = parseInt(document.getElementById('tipPercentage').value);
    let splitPeople = parseInt(document.getElementById('splitPeople').value);

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

