import { createSlice } from "@reduxjs/toolkit";
import saveData, { getData } from "./service/localstorage";

let expenseSlice = createSlice({
    initialState:{
        expense : []
    },
    name:"Expense",
    reducers:{
        addExpense:(state,action)=>{
            console.log(state)
        }
        ,
        filtering:(state,action)=>{
            let {data,is_ascending} = action.payload
            let arr = [...state.expense]
            if(data.includes("date")){
                if(is_ascending == "true"){
                    arr.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
                }else{
                    arr.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                }
            }
            if(data.includes("amount")){
                if(is_ascending == "true"){
                    arr.sort((a, b) => Number(a.amount) - Number(b.amount))
                }else{
                    arr.sort((a, b) => Number(b.amount) - Number(a.amount))
                }
            }
            if(data.includes("title")){
                if(is_ascending == "true"){
                    arr.sort((a, b) => a.title.localeCompare(b.title))
                }else{
                    arr.sort((a, b) => b.title.localeCompare(a.title))
                }
            }
            if(data.length==0){
                arr = getData()
            }
            state.expense = [...arr]
        },
        filter : (state,action)=>{
            let {id,data} = action.payload

            let {categories} = action.payload
            let all_expenses = getData()
            if(categories == ""){
                state.expense = all_expenses
                return 
            }
            let filtered_expenses=all_expenses.filter(data=>categories.includes(data.category))
            if(filtered_expenses.length==0){
                state.expense = all_expenses
            }
            state.expense = filtered_expenses
        },
        edit:(state,action)=>{
            let {id,data} = action.payload

            let all_expenses = [...state.expense]
            let edited_expense = all_expenses.filter((curr_data)=>curr_data.id == id)
            edited_expense = {
                ...edited_expense[0],...data
            }
            let idx = all_expenses.findIndex(data=>data.id == id)
            all_expenses[idx] = edited_expense
            saveData(all_expenses)
            state.expense =  all_expenses
        }, 
        deleteData :(state,action)=>{
            let {id,data} = action.payload

            let all_expenses = state.expense.filter((expense) => expense.id !== id);
            saveData(all_expenses);
            return all_expenses;
        },
        fill : (state)=>{
            state.expense = getData()
        }
    }
})
let filterSlice = createSlice({
    initialState:{
        filter : []
    },
    name:"filter",
    reducers:{
       
       
       
    }
})
export const {addExpense,edit,deleteData,fill,filtering} = expenseSlice.actions
export default expenseSlice.reducer
export let filter_slice =  filterSlice.reducer
export const {filter} = expenseSlice.actions
