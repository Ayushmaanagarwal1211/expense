import saveData, { getData } from "../service/localstorage";

export function genId(){
    let data = getData()
    let max = 0
    for(let i of data){
        max = Math.max(max , +i.id)
    }
    return max + 1
}
export function reducer(state,action){
    let {id,data} = action.payload
    switch(action.type){
        case "EDIT":{
            let all_expenses = [...state]
            let edited_expense = all_expenses.filter((curr_data)=>curr_data.id == id)
            edited_expense = {
                ...edited_expense[0],...data
            }
            let idx = all_expenses.findIndex(data=>data.id == id)
            all_expenses[idx] = edited_expense
            saveData(all_expenses)
            return all_expenses
        }
        case "FILL":{

        }
     
        case "DELETE": {
            let all_expenses = state.filter((expense) => expense.id !== id);
            saveData(all_expenses);
            return all_expenses;
          }
          case "FILTER":{

            let {categories} = action.payload
            console.log(categories)
            let all_expenses = getData()
            let filtered_expenses=all_expenses.filter(data=>categories.includes(data.category))
            if(filtered_expenses.length==0){
                return all_expenses
            }
            return filtered_expenses
          }
        default:{

        }
    }
}
export function editData(data){
    return {type:"EDIT",payload:{id:data.id,data}}
}
export function deleteData(id){
    return {type:"DELETE",payload:{id}}
}