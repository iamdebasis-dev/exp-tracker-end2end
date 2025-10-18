



const ExpensesList = ({props,onDeleteRecord}) => {

    return(
        <div>
          <div className="">
            {
              props.map((Expenses) =>{
                return(
                <div key={Expenses.id} className="grid grid-cols-[1fr_1fr_1fr_auto] border border-gray-300" >
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="bg-green-300 px-2 rounded-2xl flex gap-2">{Expenses.category}</p>
                    </div>
                    <p className="text-sm text-gray-600">{Expenses.date}</p>
                  </div>
    
                  <div>{Expenses.description}</div>
                  <div>{Expenses.amount}</div>
                  <button onClick={() =>onDeleteRecord(Expenses.id)} className="px-6">delete</button>
    
    
                </div>
              )}
              )
            }
    
          </div>
        </div>
      )
}
export default ExpensesList
