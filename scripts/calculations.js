let budgetValue = 0;
let totalExpensesValue = 0;
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) return 0;
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
let balanceColor;
function updateBalanceColor() {
  balanceColor = calculateBalance();
  if (balanceColor < 0) {
    balanceColor = "red";
  } else if (balanceColor <= budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categoriesTotals = [];
  const categories = [];
  let largestCategory = ["", 0];
  for (let i = 0; i < expenseEntries.length; i++) {
    if (!categories.includes(expenseEntries[i][0])) {
      categories.push(expenseEntries[i][0]);
    }
  }
  for (let i = 0; i < categories.length; i++) {
    categoriesTotals.push([
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ]);
  }
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestCategory[1]) {
      largestCategory = categoriesTotals[i];
    }
  }
  return largestCategory[0];
}

function addExpenseEntry(category, amount) {
  const addCategory = category[0];
  const amountNum = parseFloat(amount[1]);

  if (isNaN(amountNum) || amountNum <= 0) {
    return;
  }
  expenseEntries.push([addCategory, amountNum]);

  totalExpensesValue += amountNum;
}
