import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './IconButton.css'

function IconButton({ type, linkto, text, icon }) {
    let Container = ({ className, children }) => {
        if (type === "Link") {
            return <Link className={className} to={linkto}>{children}</Link>
        }
        return <button className={className} type={type}>{children}</button>
    }
    return (
        <div className='icon-button-beautiful-wrapper'>
            <Container className="icon-button-beautiful-container">
                {text}
                <img src={"/icons/" + icon + ".svg"} alt="journal-icon" />
            </Container>
        </div>
    )
}

export default IconButton