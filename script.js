let entryList = []
let badList = []

// get data on form submit

const handleOnSubmit = e => {
    
    const formDt = new FormData(e)
    const task = formDt.get('task')
    const hr = formDt.get('hr')

    const obj = {task, hr}
    entryList.push(obj)
   display(entryList)
}

// display the data in the list 
const display = (taskArg) => {
    let str = ""

taskArg.map((item, i) => {
    str += `<tr>
                        
    <td>
      ${item.task}
    </td>
    <td>${item.hr}hrs</td>
<td class="text-end">
<button onclick = (handleOnDeleteEntryList(${i})) class="btn btn-danger">
    <i class="fa-solid fa-trash-can"></i>
</button>
<button onclick = (switchToBadList(${i})) class="btn btn-success">
    <i class="fa-solid fa-arrow-right"></i>
</button>
</td>
</tr>`
})
document.getElementById('entryList').innerHTML = str

}




// delete data from the entry list
const handleOnDeleteEntryList = i => {

    if(!confirm("Are you sure you to delete this entry")) return;
    const filteredArg = entryList.filter((item, index) => index !== i)

    entryList = filteredArg
    display(entryList)
}

// switch data to the bad list
const switchToBadList = (i) => {
    const itemToBeSwitched = entryList.splice(i, 1)
    badList.push(itemToBeSwitched[0])
    display(entryList)
    badListDisplay(badList)
}

// display bad list on the dom
const badListDisplay = (arg) => {
    let str = ""

    arg.map((item, i)=> {
        str += `<tr>
        <td> ${item.task}</td>
        <td>${item.hr}hrs</td>
        <td class="text-end">
        <button onclick= (switchToEntryList(${i})) class="btn btn-warning">
        <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button onclick= (handleOnDeleteBadList(${i})) class="btn btn-danger">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
        </tr>`
    })
    document.getElementById('badList').innerHTML = str
}

// delete data from the entry list
const handleOnDeleteBadList = i => {

    if(!confirm("Are you sure you to delete this entry")) return;
    const filteredarg = badList.filter((item, index) => index !== i)

    badList = filteredarg
    badListDisplay(badList)
}

// switch data to the entry list
const switchToEntryList = (i) => {
    const itemToBeSwitched = badList.splice(i, 1)
    entryList.push(itemToBeSwitched[0])
    display(entryList)
    badListDisplay(badList)
}