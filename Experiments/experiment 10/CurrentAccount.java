// CurrentAccount inherits BankAccount
public class CurrentAccount extends BankAccount {

    private double interestRate = 2.0; // 2% interest

    // Constructor
    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {
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
        System.out.println("--- Current Account ---");
        super.displayDetails();
        System.out.println("Interest Rate    : " + interestRate + "%");
        System.out.println("Interest Earned  : ₹" + calculateInterest());
    }
}
