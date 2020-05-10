import React from 'react';
import classes from './Logo.module.css'
import logoFile from '../../assets/logo.svg';

const logo = () => <img src={logoFile} className={classes.Logo} alt="logo" />;


export default logo;