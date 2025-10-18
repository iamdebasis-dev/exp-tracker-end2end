import { useState } from "react";


const ExpensesForm = ({}) => {

    const [description, setDescription] = useState("")
    const [amount , setAmount] = useState("")
    const [date , setDate] = useState("2025-09-11")

    return(
        <div>

            <form className="" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input className="bg-gray-50 borde border-gray-300 text-gray-900 text-sm rounded" onChange={(e)=>{

                    setDescription(e.target.value)
                }}/>

                <input className="bg-gray-50 borde border-gray-300 text-gray-900 text-sm rounded" onChange={(e)=>{
                    setAmount(e.target.value)
                }}/>

                <input type="date" value={data} onChange={(e)=>
                    {
                        setDate(e.target.value)
                    }
                }/>
                <select defaultValue={"setFilterCtegory"} onChange={(e) => {
        setFilterCategory(e.target.value)}} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500">
          <option value="*" disabled >Select a category</option>
          {props.categories.map(categories => <option key={categories} value={categories}>{categories}</option>)}
        </select>
                            </form>
        </div>
    )
}