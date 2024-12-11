import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import Context from './context';
import { useDispatch, useSelector } from 'react-redux';
import { fill } from './slice';


function App() {
let list = useSelector(state=>state)
let [isTable,setIsTable] = useState(true)
let dispatch = useDispatch()
useEffect(()=>{
dispatch(fill())
},[])
  return (
    <Context.Provider value={{isTable,setIsTable}}>

    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage />}></Route>
          <Route path='expenses' element={<ExpenseListPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
