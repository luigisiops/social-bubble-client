import React, { Component, useState } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const MenuExample = () => {
    const [state, setState] = useState("")
    const [activeItem, setActiveItem] = useState("")


    const handleItemClick = (name) => {
        setActiveItem(name)
    }


    return (
        <Menu>
            <Link to='/dashboard'>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={() => handleItemClick('Home')}
                >
                    Home
        </Menu.Item>
            </Link>

            <Link to='/bubbles'>
                <Menu.Item
                    name='Contacts'
                    active={activeItem === 'Contacts'}
                    onClick={() => handleItemClick('Contacts')}
                >
                    Contacts
            </Menu.Item>
            </Link>

            <Link to='/'>
                <Menu.Item
                    name='Information'
                    active={activeItem === 'Information'}
                    onClick={() => handleItemClick('Information')}
                >
                    Information
            </Menu.Item>
            </Link>

            <Menu.Menu position='right'>
                <Link to='/login'>
                    <Menu.Item>
                        Login
                </Menu.Item>
                </Link>

                <Link to="/register">
                    <Menu.Item>
                        Sign Up
                </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>

    )
}


export default MenuExample