// SavingsAccount inherits BankAccount
public class SavingsAccount extends BankAccount {

    private double interestRate = 4.0; // 4% interest

    // Constructor
    public SavingsAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    // Implementing abstract method
    @Override
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    // Display details
    @Override
    public void displayDetails() {
        System.out.println("--- Savings Account ---");
        super.displayDetails();
        System.out.println("Interest Rate    : " + interestRate + "%");
        System.out.println("Interest Earned  : ₹" + calculateInterest());
    }
}
