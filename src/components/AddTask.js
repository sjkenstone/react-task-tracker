import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()

    if(!text) {
      alert('Please add a task')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  const handleTask = (event) => {
    setText(event.target.value)
  }

  const handleDay = (event) => {
    setDay(event.target.value)
  }

  const handleReminder = (event) => {
    setReminder(event.currentTarget.checked)
  }



  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={handleTask} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={handleDay} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} onChange={handleReminder} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask