var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
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
        return "".concat(this.recipient, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('.item-list');
console.log(ul);
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var docs;
    var values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        docs = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        docs = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(docs, type.value, 'end');
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
