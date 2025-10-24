import { useState } from "react";


const ExpensesForm = ({ categories, setFilterCategory,onAddExpense}) => {

    const [description, setDescription] = useState("");
    const [amount , setAmount] = useState("");
    const [date , setDate] = useState("2025-09-11");
    const [category ,setCategory] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) {
            alert("Please fill in all fields!");
            return;
          }
          const newExpense = { description, amount: parseFloat(amount),date,category,};
          onAddExpense(newExpense);
          setDescription("");
          setAmount("");
          setCategory("");
          setDate("2025-09-11");
          setFilterCategory(category);
      };

    return(
        <div className="bg-gray-200 rounded-xl">
            <form onSubmit={handleSubmit}>
        
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded" value={description} onChange={(e)=>{

                    setDescription(e.target.value)
                }}/>

                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded" value={amount} onChange={(e)=>{
                    setAmount(e.target.value)
                }}/>

                <input type="date" value= {date} onChange={(e)=>
                    {
                        setDate(e.target.value)
                    }
                }/>
                <select defaultValue={"ctegory"} onChange={(e) => {
                    setCategory(e.target.value);
        setFilterCategory(e.target.value)}} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500">
          <option value="*" disabled >Select a category</option>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 m-2 py-2  rounded-3xl ">Add Expense </button>
                            </form>
        </div>
    )
}
export default ExpensesForm;
