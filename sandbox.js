var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        console.log("".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details));
    };
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        console.log("".concat(this.recipient, " owes ").concat(this.amount, " for ").concat(this.details));
    };
    return Payment;
}());
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var docs;
    if (type.value === 'invoice') {
        docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(docs);
});
var me = {
    name: 'Lukasz',
    age: 27,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("Hello ".concat(person.name));
};
greetPerson(me);
