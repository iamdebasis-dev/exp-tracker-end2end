import { useState } from "react"
import { sampleExpenses } from "./data"
import ExpensesList from "./ExpensesList"
import ExpensesForm from "./ExpensesForm"
import ExpenseSummary from "./ExpenseSummary"

const App =()=>{
  const[expenses ,setExpenses]=useState(sampleExpenses)
  const [filterCategory, setFilterCategory] = useState("");

  const handleDeleteRecord = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses,{ ...newExpense, id: Date.now() }]);};

  const categories = [...new Set(sampleExpenses.map((e) => e.category))];

 
  const filteredExpenses = filterCategory && filterCategory !== ""? expenses.filter((e) => e.category === filterCategory): expenses;

  return (
    <>
  
      <h1 className="flex justify-center text-3xl text-bold py-3">Expenses Tracker</h1>
      <div className="p-3">
      <ExpensesForm categories={categories} 
      setFilterCategory={setFilterCategory} 
      onAddExpense={handleAddExpense}/>
      <div className="grid grid-cols-2 m-1 ">
      <ExpensesList expenses={expenses} onDeleteRecord={handleDeleteRecord} />
      <div className="p-7">
      <ExpenseSummary records={expenses} />
      </div>
      </div>
    </div>
    </>
  )
}
export default App