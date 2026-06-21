// Main class
public class Main {
    public static void main(String[] args) {

        // Creating SavingsAccount object
        SavingsAccount savings = new SavingsAccount("SA1001", "Aarav Sharma", 50000);
        savings.deposit(10000);
        savings.displayDetails();

        System.out.println();

        // Creating CurrentAccount object
        CurrentAccount current = new CurrentAccount("CA2001", "Priya Mehta", 100000);
        current.deposit(25000);
        current.displayDetails();
    }
}
