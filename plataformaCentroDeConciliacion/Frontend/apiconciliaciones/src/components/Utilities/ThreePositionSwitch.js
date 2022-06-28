import React, { useEffect, useState } from 'react'
import './css/ThreePositionSwitch.css'
import axiosApiInstance from './axiosApiInstance'

function ThreePositionSwitch({ initialValue, id }) {
    const [value, setValue] = useState(initialValue)

    useEffect(()=> {
        console.log(value)
        console.log(id)        
    }, [value])


    return (
        <div className={"switch text-center " + (value == "1" ? "background-gray" : (value == "11" ? "background-green" : "background-red"))}>
            <input className='switch-radio' type="radio" id="switch1" checked={value == 12} onChange={e => value==11 ? setValue(1) : setValue(12)} />
            <label htmlFor="switch1"></label>
            <input className='switch-radio' type="radio" id="switch2" checked={value == 1} onChange={e => setValue(1)} />
            <label htmlFor="switch2"></label>
            <input className='switch-radio' type="radio" id="switch3" checked={value == 11} onChange={e => value==12 ? setValue(1) : setValue(11)}  />
            <label htmlFor="switch3"></label>
            <div className="switch__inner"></div>
            {/* {value} */}
        </div>
    )
}

export default ThreePositionSwitch