class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    constructor(amount = 0){
        super();
        let amountV = amount;

        this.addtoAmount = (new_amount) => {
            amountV += new_amount;
            return this;
        };
    
        this.reduceFromAmount = (new_amount) => {
            amountV -= new_amount;
            return this;
        };
    
        this.getAmount = () => {
            return super.getAmount() + amountV;
        };
    }
    
}

class CreditMethod extends PaymentMethod {
    constructor(amount = 0){
        super();
        let amountV = amount;

        this.addtoAmount = (new_amount) => {
            amountV += 0.9 * new_amount;
            return this;
        };
    
        this.reduceFromAmount = (new_amount) => {
            amountV -= new_amount;
            return this;
        };
    
        this.getAmount = () => {
            return super.getAmount() + amountV;
        };
    }
}

const cashAccount = new CashMethod();
		cashAccount.getAmount(); // returns “Your amount in the account is: 0”
		cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
		cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
		cashAccount.getAmount(); // returns “Your amount in the account is: 140”

		const creditAccount = new CreditMethod();
		creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
		creditAccount.getAmount(); // returns “Your amount in the account is: 90”;
