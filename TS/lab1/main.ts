class Account {
  acc_no: Number;
  balance: Number;
  debitAmount() {}
  creditAccount() {}
  getBalance() {}
}

interface Iaccount {
  Date_of_Opening: Date;
  addCustomer();
  removeCustomer();
}

class CurrentAccount extends Account implements Iaccount {
  Date_of_Opening: Date;
  addCustomer() {}
  removeCustomer() {}
}

class SavingAccount extends Account implements Iaccount {
  Date_of_Opening: Date;
  addCustomer() {}
  removeCustomer() {}
}
