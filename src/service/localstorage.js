export  function addData(data_to_add){
    let data = localStorage.getItem('expense_data') || '[]'
    console.log([...JSON.parse(data),data_to_add])
    localStorage.setItem('expense_data', JSON.stringify([...JSON.parse(data),data_to_add]))
}

export default function saveData(data){
    localStorage.setItem('expense_data', JSON.stringify([...data]))

}
export function getData(){
    let data = localStorage.getItem("expense_data") || '[]'
    return JSON.parse(data)
}