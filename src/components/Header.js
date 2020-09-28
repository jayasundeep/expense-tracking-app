import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='isActive' exact={true} >Go Home</NavLink>
        <NavLink to='/create' activeClassName='isActive' >Add Expense</NavLink>
        <NavLink to='/help' activeClassName='isActive' >Go to Help</NavLink>
    </header>
);

export default Header;