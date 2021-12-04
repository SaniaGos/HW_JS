const TransactionType = Object.freeze({
    PUT:   Symbol("Put Credits"),
    TAKE:  Symbol("Take Credits"),
    LIMIT: Symbol("Set Transaction Limit")
});

class Transaction {
    constructor(type, credits, balance, complete, descriptions) {
        this.transactionType = type;
        this.credits = credits;
        this.balance = balance;
        this.time = new Date();
        this.complete = complete;
        this.descriptions = descriptions ||= '';
    }
}

class Card {
    constructor() {
        this.balance = 100;
        this.transactionLimit = 100;
        this.historyLog = [];
        //this.key = cardKey;
    };

    putCredits(money) {
        if (typeof (money) === 'number' && money > 0) {
            this.balance += money;
            this.historyLog.push(new Transaction(TransactionType.PUT, money, this.balance, true));
            return true;
        }
        return false;
    };

    takeCredits(money) {
        if (typeof (money) === 'number' && money <= this.transactionLimit) {
            if (money <= this.balance) {
                this.balance -= money;
                this.historyLog.push(new Transaction(TransactionType.TAKE, money, this.balance, true));
                return true;
            }
            this.historyLog.push(new Transaction(TransactionType.TAKE, money, this.balance, false, 'Insufficient funds on the card'));
            console.error(`Insufficient funds on the card.  Operation time ${new Date()}`);
            return false;
        }
        this.historyLog.push(new Transaction(TransactionType.TAKE, money, this.balance, false,'Card transaction limit exceeded.'));
        console.error(`Card transaction limit exceeded.  Operation time ${new Date()}`);
        return false;
    };

    setTransactionLimit(money) {
        if (typeof (money) === 'number' && money >= 0) {
            this.transactionLimit = money;
            this.historyLog.push(new Transaction(TransactionType.LIMIT, money, this.balance, true));
            return true;
        }
        return false;
    }

    transferCredits(money, destinationCard) {
        if (destinationCard instanceof Card && this.takeCredits(money * 1.005)){
            destinationCard.putCredits(money);
            return true;
        }
        //console.error(`Destination Card from other bank, can't make a transaction`)
    }
}
class UserAccount{
    constructor(name) {
        this.name = name;
        this.cards = [];
    };

    addCard(){
        if (this.cards.length < 3)
            this.cards.push(new Card());
        else
            console.error('Number of cards exceeded')
    };

    getCardByKey(num){
        if (num <= this.cards.length && num > 0) return this.cards[num - 1];
        else{
            console.error('Card not found');
            return null;
        }
    };
}


let user = new UserAccount('Sania');
user.addCard();
user.addCard();

user.getCardByKey(1).setTransactionLimit(500);
user.getCardByKey(1).putCredits(1500);
user.getCardByKey(1).transferCredits(455, user.getCardByKey(2));
user.getCardByKey(1).transferCredits(555, user.getCardByKey(2));
user.getCardByKey(1).setTransactionLimit(1500);
user.getCardByKey(1).transferCredits(755, user.getCardByKey(2));
user.getCardByKey(1).transferCredits(755, user.getCardByKey(2));

console.log(user);
