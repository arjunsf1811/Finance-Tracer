# Finance-Tracer

## Overview

The **Personal Finance Tracker** is a web application designed to help users track their income, expenses, and manage their budget effectively. It offers users the ability to add, update, and delete transactions while providing graphical summaries (such as pie charts and bar graphs) to visualize financial data. This tracker helps users stay on top of their finances by keeping a detailed record of income and expenses, setting a budget, and notifying them when their spending exceeds the limit.

## Features

- **Add, Update, Delete Transactions**: Users can easily manage their transactions (income/expenses) with a simple form interface.
- **Visual Charts**: Displays pie charts to show expense categories and bar charts to visualize monthly expenses.
- **Budget Summary**: Users can view their total income, total expenses, and remaining budget at a glance.
- **Local Storage**: All data is saved locally in the browser using `localStorage`, ensuring persistence across sessions.
- **Notifications**: Users get alerted if expenses exceed the budget set for a specific category (future feature).

## Technologies Used

- **HTML & CSS**: For creating the structure and styling of the application.
- **JavaScript**: For handling user input, transaction logic, and DOM manipulation.
- **Chart.js**: A popular charting library used to display financial data in the form of pie and bar charts.
- **Local Storage**: To store and retrieve the user's transaction data within the browser, ensuring persistence.

## Project Structure

personal-finance-tracker/
│
├── index.html          # Main HTML file that renders the UI.
├── styles.css          # CSS file for styling the application.
└── app.js              # JavaScript file for handling business logic, transactions, and charts.


### File Descriptions:

1. **index.html**: Contains the structure of the web app, including the transaction form, budget summary, and chart elements.
2. **styles.css**: Defines the layout, styles, and appearance of the web app elements.
3. **app.js**: Handles all the application logic such as adding transactions, updating charts, calculating budget, and storing data locally.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.).
- Internet connection to load Chart.js (or you can download it locally).

### Running the Project

1. **Download/Clone the project**: Clone this repository or download the files to your local machine.
2. **Open `index.html`**: Open the `index.html` file in a web browser.
3. **Start Adding Transactions**: Use the form to add your income and expenses. The app will dynamically update the budget summary and display charts to visualize your data.

### How to Use

1. **Add a Transaction**: Enter the amount, select the type (income or expense), and provide a category. Click "Add Transaction" to add it to your financial records.
2. **Visualize Data**: Check the pie chart for the distribution of expenses across categories and the bar chart for monthly expenses.
3. **Manage Transactions**: View the list of transactions at the bottom and delete any entry by clicking the "Delete" button.
4. **Check Budget**: The budget summary at the top will automatically update with the total income, total expenses, and remaining budget.

## Future Enhancements

- **Budget Alerts**: Implement notifications to alert the user when spending exceeds a predefined budget.
- **Expense Categorization**: Add a feature to categorize expenses more dynamically.
- **Cloud Storage**: Allow users to store their data on a server (e.g., Firebase) for long-term persistence across multiple devices.

## Contributing

If you'd like to contribute or suggest improvements, feel free to fork the project and submit a pull request. All contributions are welcome!

## License

This project is licensed under the Apache License, Version 2.0 (the "License");  
you may not use this file except in compliance with the License.  
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0  

Unless required by applicable law or agreed to in writing, software  
distributed under the License is distributed on an "AS IS" BASIS,  
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and  
limitations under the License.
