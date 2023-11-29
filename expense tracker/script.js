// Array to store expense objects
const expenses = [];
let myChart; // Variable to hold the Chart instance

// Function to add a new expense
function addExpense() {
    // Get category and amount from user input
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Check if the inputs are valid
    if (category && !isNaN(amount)) {
        // Create an expense object and push it to the expenses array
        const expense = { category, amount };
        expenses.push(expense);

        // Update the displayed expenses and chart
        displayExpenses();
        displayChart();

        // Clear the input form
        clearForm();
    } else {
        // Alert the user if inputs are invalid
        alert('Please enter a valid category and amount.');
    }
}

// Function to display expenses in the UI
function displayExpenses() {
    const expensesList = document.getElementById('expense-items');
    expensesList.innerHTML = '';

    // Iterate through expenses and create list items
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'expense-item';
        listItem.innerHTML = `
            <span>${expense.category}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <span class="delete-button" onclick="deleteExpense(${index})">Delete</span>
        `;
        expensesList.appendChild(listItem);
    });
}

// Function to delete an expense
function deleteExpense(index) {
    // Remove the expense from the array and update the UI and chart
    expenses.splice(index, 1);
    displayExpenses();
    displayChart();
}

// Function to display a bar chart of expenses
function displayChart() {
    const ctx = document.getElementById('expense-chart').getContext('2d');
    const labels = expenses.map(expense => expense.category);
    const data = expenses.map(expense => expense.amount);
    const backgroundColor = expenses.map(expense => expense.amount > 0 ? 'rgba(253, 253, 150, 0.7)' : 'rgba(255, 99, 132, 0.7)'); // Yellow and red chart colors
    const borderColor = expenses.map(expense => expense.amount > 0 ? 'rgba(253, 253, 150, 1)' : 'rgba(255, 99, 132, 1)');

    // Destroy the previous chart instance to prevent duplicates
    if (myChart) {
        myChart.destroy();
    }

    // Create a new bar chart
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Amount',
                data,
                backgroundColor,
                borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to clear the input form
function clearForm() {
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
}
