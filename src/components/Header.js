import React from 'react';
import { NavLink } from 'react-router-dom'
import { startLogin, startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName='isActive' exact={true} >Go Home</NavLink>
        <NavLink to="/create" activeClassName='isActive' >Add Expense</NavLink>
        <NavLink to="/help" activeClassName='isActive' >Go to Help</NavLink>
        <button onClick={startLogout}> Log Out </button>
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout : () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);
