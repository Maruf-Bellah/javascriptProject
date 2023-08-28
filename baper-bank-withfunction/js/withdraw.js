document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputfieldValueById("withdraw-input");
    const previousWithdrawTotal = getElementValueById("withdraw-total");

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById("withdraw-total", newWithdrawTotal);

    const previousBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setTextElementValueById("balance-total", newBalanceTotal);
  });
