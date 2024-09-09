// DOM elements
const incomeDisplay = document.getElementById('total-income');
const expensesDisplay = document.getElementById('total-expenses');
const remainingBudgetDisplay = document.getElementById('remaining-budget');
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const pieChartElement = document.getElementById('pie-chart').getContext('2d');
const barChartElement = document.getElementById('bar-chart').getContext('2d');

// Transaction data and charts
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let pieChart, barChart;

// Initialize the app
function init() {
    updateBudget();
    updateCharts();
    renderTransactionList();
}

// Handle form submission
transactionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    const transaction = {
        amount,
        type,
        category,
    };

    transactions.push(transaction);
    updateBudget();
    updateCharts();
    renderTransactionList();
    saveToLocalStorage();
    transactionForm.reset();
});

// Update budget calculations
function updateBudget() {
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else {
            totalExpenses += transaction.amount;
        }
    });

    incomeDisplay.textContent = totalIncome.toFixed(2);
    expensesDisplay.textContent = totalExpenses.toFixed(2);
    remainingBudgetDisplay.textContent = (totalIncome - totalExpenses).toFixed(2);
}

// Render transaction list
function renderTransactionList() {
    transactionList.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <p>${transaction.category} (${transaction.type}): $${transaction.amount.toFixed(2)}</p>
            <button onclick="deleteTransaction(${index})">Delete</button>
        `;
        transactionList.appendChild(transactionItem);
    });
}

// Delete a transaction
function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateBudget();
    updateCharts();
    renderTransactionList();
    saveToLocalStorage();
}

// Save transactions to localStorage
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update charts
function updateCharts() {
    const categoryData = transactions.reduce((acc, transaction) => {
        if (!acc[transaction.category]) acc[transaction.category] = 0;
        acc[transaction.category] += transaction.amount;
        return acc;
    }, {});

    const categories = Object.keys(categoryData);
    const amounts = Object.values(categoryData);

    // Pie Chart
    if (pieChart) pieChart.destroy();
    pieChart = new Chart(pieChartElement, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: amounts,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FFC107']
            }]
        }
    });

    // Bar Chart
    const monthlyExpenses = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => {
            const month = new Date().getMonth();
            acc[month] = (acc[month] || 0) + transaction.amount;
            return acc;
        }, Array(12).fill(0));

    if (barChart) barChart.destroy();
    barChart = new Chart(barChartElement, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: monthlyExpenses,
                backgroundColor: '#36A2EB',
            }]
        }
    });
}

// Initialize app on page load
window.onload = init;
