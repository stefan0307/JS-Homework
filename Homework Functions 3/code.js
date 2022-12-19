function atm (input){
    let cashOnCard = 1200;
  if (cashOnCard < input)
  {
    console.log(`You cant withdraw that amount of money`);
  } else if (cashOnCard > input) {
    console.log(`You withdraw`, input, `dollars`);
    console.log(`Money left on card:`, cashOnCard - input);
  } else {
    console.log(`Please enter a valid input`);
  }

}

let moneyWithdraw = Number(prompt(`Enter the amount of money you want to withdraw`));
atm(moneyWithdraw);