



const ExpensesList = ({expenses,onDeleteRecord}) => {

    return(
        <div>
          <div className="bg-gray-100">
            {
              expenses.map((expenses) =>{
                return(
                  
                  <div key={expenses.id} className="grid grid-cols-[1fr_1fr_1fr_auto] border border-gray-300" >
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="bg-green-300 px-2 rounded-2xl flex gap-2">{expenses.category}</p>
                    </div>
                    <p className="text-sm text-gray-600">{expenses.date}</p>
                  </div>
    
                  <div>{expenses.description}</div>
                  <div>{expenses.amount}</div>
                  <button onClick={() =>onDeleteRecord(expenses.id)} className="px-6">delete</button>

    
    
                </div>
                )
              }
              )
            }
    
          </div>
        </div>
      )
}
export default ExpensesList;
