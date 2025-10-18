import { useState } from "react";
import { sampleExpenses } from "./data";
import ExpensesList from "./ExpensesList";




function App(){
  const[Expenses , setExpenses] = useState(sampleExpenses);
  const onDelete = (recordId) =>{
    setExpenses(Expenses.filter(E => E.id != recordId))
  }
  return(
  <div>
    <ExpensesList onDeleteRecord={onDelete} props={Expenses} />
  </div>
  )

  
}
export default App ;