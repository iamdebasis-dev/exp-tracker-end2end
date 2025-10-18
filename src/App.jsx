import { useEffect, useState } from "react";
import { sampleExpenses } from "./data";
import ExpensesList from "./ExpensesList";




function App(){
  const[Expenses , setExpenses] = useState(sampleExpenses);
  const [categories, setCategories] = useState([])
  const[FilterCategory,setFilterCategory] = useState("*")

  useEffect(() =>{
    if(Expenses.length>0){
      const categoriesSet = newSet()
      Expenses.forEach(e =>{
        categoriesSet.add(e.category)
      })
      setCategories(Array.from(categoriesSet))
    }
  },[Expenses])
  const onDelete = (recordId) =>{
    setExpenses(Expenses.filter(E => E.id != recordId))
  }
  return(
  <div>
    <div className="grid grid-cols-2 gap-2 justify-between max-h-sm items-center">
      <h1>Filter by Category</h1>
      <select defaultValue={"setFilterCtegory"} onChange={(e) => {
        setFilterCategory(e.target.value)}} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500">
          <option value="*" disabled >Select a category</option>
          {categories.map(categories => <option key={categories} value={categories}>{categories}</option>)}
        </select>

    </div>
    
    <ExpensesList onDeleteRecord={(recordId)=>{ onDelete=(recordId)}}
    record={FilterCategory == "*" ? Expenses:Expenses.filter(e.categories === FilterCategory)} />
  </div>
  )

  
}
export default App ;