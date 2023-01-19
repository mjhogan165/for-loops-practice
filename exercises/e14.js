// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let newArray = [];
  for (const acc of array) {
    let sumDeposit = 0;
    let sumWithdrawal = 0;
    let calculatedBalance = 0;
    if (acc.deposits) {
      for (const deposit of acc.deposits) {
        sumDeposit += deposit;
      }
    }
    if (acc.withdrawals) {
      for (const withdrawal of acc.withdrawals) {
        sumWithdrawal += withdrawal;
      }
    }
    calculatedBalance = sumDeposit - sumWithdrawal;
    if (calculatedBalance !== acc.balance) {
      newArray.push(acc);
    }
  }
  return newArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
