import React, { useContext, useEffect, useReducer, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
// import {  deleteData, editData, reducer } from '../reducers/reducer';
import saveData, { getData } from '../service/localstorage';
import context from '../context';
import ExpenseCardList from '../components/ExpenseCardList';
import FilterDropdown from '../components/FilterDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { edit, filter,deleteData } from '../slice';

const ExpenseListPage = () => {
    let {isTable,setIsTable} = useContext(context)
    const expensesDataString = localStorage.getItem('expense_data') || '[]';
    const expenses = JSON.parse(expensesDataString)
    let expense = useSelector(state=>state.expense.expense) 
    let [categories,setCategories] = useState([])
    let [selectedCategories,setSelectedCategories] = useState([])
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(filter({categories:selectedCategories}))
    },[selectedCategories])

    function onSelect(data){
        if(selectedCategories.includes(data)){
            let arr = selectedCategories.filter((item)=>item!== data)
            setSelectedCategories([...arr])
            return 
        }
        setSelectedCategories(prev=>[...prev,data])
    }


    useEffect(()=>{
        let arr = []
        for(let i of getData()){
            if(!arr.includes(i.category)){
                arr.push(i.category)
            }   
        }
        setCategories([...arr])
    },[expense])
    const handleDeleteExpense = (id) => {
        dispatch(deleteData(id))
    };
    function handleSave(data){
        dispatch(edit({id:data.id , data:data}))
    }
    function handleChange(e){
        if(e.target.value == "card"){setIsTable(false)}else{
            setIsTable(true)
        }
    }
 
    return (
        <>
            <h1>Expense List</h1>
            <select onChange={handleChange} defaultValue={"table"}>
                <option value={"card"}>Card View</option>
                <option value={"table"} >Table View</option>

            </select>
          <FilterDropdown  handleSelectedCategories={onSelect}  expense={expense}/>
         

          {isTable ?   <ExpenseList  onSaveExpense={handleSave} expenses={expense} onDeleteExpense={handleDeleteExpense} />
            :<ExpenseCardList  onSaveExpense={handleSave} expenses={expense} onDeleteExpense={handleDeleteExpense} />}
        </>
    );
};

export default ExpenseListPage;