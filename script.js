const entryList = []
const handleOnSubmit = e => {
    
    const formDt = new FormData(e)
    const task = formDt.get('task')
    const hr = formDt.get('hr')

    const obj = {task, hr}
    entryList.push(obj)

    console.log(obj)
}