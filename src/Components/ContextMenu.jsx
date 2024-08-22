import React, { useState } from 'react'

function ContextMenu({ positionContext,setPositionContext, setEditingRowId, setExpensesData, expensesData, rowId, expense, setIsEditing, setExpense }) {




    const { clientX, clientY } = positionContext
   

    const deleteRow = ()=>{
        setPositionContext({})   
        setExpensesData((prev) => prev.filter((item)=> item.id !== rowId))    
    }
    const editRow = ()=>{
         const foundExp =    expensesData.find((exp)=> exp.id === rowId)
        setExpense(foundExp)
        setIsEditing(rowId)
        setPositionContext({})
        
      
    }

    if (!clientX || !clientY) return null
    return (

        <div
            style={{top: clientY, left: clientX, position: 'absolute'}}
            className={`    block text-black w-full max-w-[6rem] rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark `}>
            <ul className="w-full">
                <li
                    onClick={editRow}
                    className="  cursor-pointer w-full border-b-2 border-neutral-100 border-opacity-100 p-2  dark:border-white/10 hover:text-blue-500">
                    Edit
                </li>
                <li
                    onClick={deleteRow}
                    className="w-full cursor-pointer border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10 hover:text-blue-500">
                    Delete
                </li>

            </ul>
        </div>
    )
}

export default ContextMenu
