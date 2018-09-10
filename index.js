// Your code here
var register = { transactions: [] };
function addTransaction(transactions) {

    register.transactions.push(transactions);
}
function reset() {
    var emptyArr = [];
    register.transactions = emptyArr;
}
function getTotal() {
    var total = 0;
    for (i = 0; i < register.transactions.length; i++) {
        for (j = 0; j < register.transactions[i].items.length; j++) {
            total += (register.transactions[i].items[j].price * register.transactions[i].items[j].quantity)

        }
    }
    return total
}
function getFormattedTotal() {
    return getTotal().toFixed(2);


}

module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,
};
