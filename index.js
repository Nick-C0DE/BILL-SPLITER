class Bill {
    constructor() {
        this.amounts = [];
        this.peoples = [];
    }

    /** @param {string} amountStr */
    addAmount(amountStr) {
        let amount = Number.parseInt(amountStr, 10);
        this.amounts.push(amount);
    }
/** @param {string} peopleStr */
    getCount(peopleStr) {
        let people = Number.parseInt(peopleStr, 10);
        this.peoples.push(people);
        return this.peoples.length;
    }

    getTotal() {
        let total = 0;
        this.amounts.forEach(function(amount) {
            total += amount;
        });
        return total;
    }

    getAverage() {
        return this.getTotal() / this.getCount();
    }
}

const form = document.querySelector("#amount-form");
const amount = document.querySelector("#amount");
const tbody = document.querySelector("#tbody");

const bill = new Bill();

function render() {
    tbody.innerHTML = "";
    bill.amounts.forEach(function (amount) {
        tbody.insertAdjacentHTML("beforeend", `<tr>
            <td>Paid</td>
            <td>${amount}</td>
        </tr>`);
    });
     tbody.insertAdjacentHTML("beforeend", `<tr class="separator"></tr>
        <tr>
            <th>Total</th>
            <td>${bill.getTotal()}</td>
        </tr>
        <tr>
            <th>Number of people</th>
            <td>${bill.getCount()}</td>
        </tr>
        <tr>
            <th>Amount per person</th>
            <td>${bill.getAverage()}</td>
        </tr>`);
}

form.addEventListener("submit", event => {
    event.preventDefault();

    bill.addAmount(amount.value);
    bill.getCount(people.value);
    render();
    amount.value = "";
    people.value = "";
});