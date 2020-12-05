import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import {connect} from "react-redux"

export const Members = () => {

    return (
        <div>
            <div>Place Holder</div>
            <div>Toggle</div>
            <div>Members</div>
            <div>Status</div>

            <div>Total</div>
        </div>

    )

}



export default connect(mapStateToProps, mapDispatchToProps)(Members)

