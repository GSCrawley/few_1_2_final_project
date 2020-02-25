import React from 'react'
import './PageFooter.css'

var currentTime = new Date()
var year = currentTime.getFullYear()

function PageFooter() {
    return (
    <div className="PageFooter">
    <header>
    <h3>Gideon Crawley &copy; <span id= {year}></span> 2020</h3>
    </header>
    </div>
    )
   }

export default PageFooter