

document.getElementById('diposite-button').addEventListener('click', function(){
    const newDipositeAmount = getInputfieldValueById('diposite-input');
    const priviasDipositeTotal = getElementValueById('diposite-total');

    const newDipositeTotal = priviasDipositeTotal + newDipositeAmount;
    setTextElementValueById('diposite-total', newDipositeTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDipositeAmount;
    setTextElementValueById('balance-total', newBalanceTotal);



})