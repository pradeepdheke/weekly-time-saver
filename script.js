const entryList = []
const handleOnSubmit = e => {
    
    const formDt = new FormData(e)
    const task = formDt.get('task')
    const hr = formDt.get('hr')

    const obj = {task, hr}
    entryList.push(obj)

    console.log(entryList)
}

const display = (taskArg) => {
    let str = ""

taskArg.map((item, i) => {
    str += `<tr>
                        
    <td>
      ${item.task}
    </td>
    <td>${item.hr}</td>
<td class="text-end">
<button class="btn btn-danger">
    <i class="fa-solid fa-trash-can"></i>
</button>
<button class="btn btn-success">
    <i class="fa-solid fa-arrow-right"></i>
</button>
</td>
</tr>`
})
}