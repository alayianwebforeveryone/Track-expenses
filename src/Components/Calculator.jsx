import React, { useEffect, useState } from 'react'
import assending from '../assets/assending.svg'
import ContextMenu from './ContextMenu'
import decending from '../assets/decending.svg'




function Calculator({ expensesData, setExpensesData, expense, setExpense, setIsEditing }) {
  const [positionContext, setPositionContext] = useState({ clientX: 0, clientY: 0 })
  const [cetagory, setCetagory] = React.useState('All')

  const [rowId, setRowId] = useState("")



  const total = () => {
    let sum = 0
    expensesData.map((item) => {
      sum += parseFloat(item.amount)
    })
    return sum
  }

  const filterData = expensesData.filter((expense) => {
    if (cetagory === "All") {
      return expense
    }
    else {
      return expense.cetagory.includes(cetagory);

    }

  })





  const handleCetagoryFilter = (e) => {
    setCetagory(e.target.value)

  }









  return (

    <>
      < ContextMenu
        expense={expense}
        setExpense={setExpense}
        positionContext={positionContext}
        setPositionContext={setPositionContext}
        setExpensesData={setExpensesData}
        rowId={rowId}
        expensesData={expensesData}
        setIsEditing={setIsEditing}
      />
      <div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full"
                  onClick={() => {
                    if (positionContext.left) {
                      setPositionContext({})
                    }

                  }


                  }>

                  <thead className="bg-[#AAABB9] border-b">



                    <tr className='font-bold'>



                      <th className="text-lg font-bold  text-[#25274D]  px-6 py-4 whitespace-nowrap">
                        Title
                      </th>
                      <th className="text-lg font-bold    px-6 py-4 whitespace-nowrap">
                        <select className='bg-[#AAABB8]'
                          value={cetagory}
                          onChange={handleCetagoryFilter}
                          name="cetagory" id="ceta">
                          <option defaultValue="All" className='text-[#25274D]' value="All">All</option>
                          <option className='text-[#25274D]' value="Electricity">Electricity</option>
                          <option className='text-[#25274D]' value="Health">Health</option>
                          <option className='text-[#25274D]' value="Food">Food </option>
                          <option className='text-[#25274D]' value="PocketMoney">Pocket Money </option>
                        </select>
                      </th>
                      <th className=" text-lg font-bold  text-[#25274D]  px-6 py-4 whitespace-nowrap">
                        <p className=' flex justify-center items-center '>
                          Amount&nbsp; &nbsp;
                          <span><img
                            onClick={() => setExpensesData((prev) => [...prev.sort((a, b) => a.amount - b.amount)])}
                            className='h-8 w-5 cursor-pointer'
                            src={assending} alt="assending" /></span>
                          <span><img
                            onClick={() => setExpensesData((prev) => [...prev.sort((a, b) => b.amount - a.amount)])}
                            className='h-8 w-5 cursor-pointer'
                            src={decending} alt="decending" /></span>

                        </p>


                      </th>

                    </tr>






                  </thead>
                  <tbody>


                    {filterData.map(({ title, cetagory, amount, id },) => {


                      return (
                        <tr className="bg-[#edeef3] border-2 border-[#464866]" key={id}
                          onContextMenu={(e) => {
                            e.preventDefault()
                            setPositionContext({ clientX: e.clientX, clientY: e.clientY })
                            setRowId(id)


                          }}>
                          <td>{title}</td>
                          <td>{cetagory}</td>
                          <td>{amount}</td>
                        </tr>
                      );
                    })}

                    <tr className='bg-[#4a9bdd] text-lg  text-white '>
                      <td>Total</td>
                      <td></td>
                      <td>{total()}</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default Calculator


