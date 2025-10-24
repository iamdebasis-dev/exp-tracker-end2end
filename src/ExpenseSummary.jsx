import { useEffect, useState } from "react";

const ExpenseSummary = ({records})=>{
    const[categorySummary , setCategorySummary]=useState([])
    useEffect(()=>{
        const tempMap= new Map()
        records.forEach(record => {
            if(tempMap.has(record.category)){
                const value = tempMap.get(record.category)
                tempMap.set(record.category ,value+record.amount)
            }
            else{
                tempMap.set(record.category, record.amount)
            }
            
        });
        const tempData = [];
        for(let item of tempMap){
            console.log(item)
            tempData.push({
                name:item[0],
                amountSpent:item[1]
            })
            }
            setCategorySummary(tempData);

    },[records]);
    return(
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        Category Summary
      </h2>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-blue-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                            category Name
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                            Amount Spent
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorySummary.map(categoryItem=>(
                            <tr key={categoryItem.name}>
                                <td>{categoryItem.name}</td>
                                <td>{categoryItem.amountSpent}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default ExpenseSummary