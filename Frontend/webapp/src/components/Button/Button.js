import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './Button.css'

function Button({ className, type, linkto, text, icon, onClick }) {

    let Container = ({ className, children }) => {
        if (type === "Link") {
            return <Link className={className} to={linkto} onClick={onClick}>{children}</Link>
        }
        return <button className={className} type={type} onClick={onClick}>{children}</button>
    }

    return (
        <Container className={"button-beautiful-container " + className}>
            {icon &&
                <img src={"/icons/" + icon + ".svg"} alt="journal-icon" />
            }
            <div className='button-beautiful-container-label'>{text}</div>
        </Container>
    )
}

export default Button