import React, { useState } from 'react'
import { connect } from "react-redux"


function Dashboard(props) {

    

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}
export default connect(mapStateToProps)(Dashboard)