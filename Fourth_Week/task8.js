class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    constructor(amount = 0){
        super();
        let amountV = amount;

        this.addToAmount = (new_amount) => {
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

        this.addToAmount = (new_amount) => {
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
