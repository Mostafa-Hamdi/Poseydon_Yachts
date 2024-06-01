import React from 'react'

const YachtForm = () => {
  return (
    <div className='yacht-form'>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='insert your name'/>
            </div>
            <div>
                <label htmlFor="whats">WhatsApp</label>
                <input type="text" id='whats' placeholder='Insert WhatsApp no.'/>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" id='date'/>
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input type="text" id='time' placeholder='example from 5am to 5pm'/>
            </div>
            <div>
                <button>Request Booking</button>
            </div>
        </form>
    </div>
  )
}

export default YachtForm