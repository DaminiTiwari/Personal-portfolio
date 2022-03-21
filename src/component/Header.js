import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import { AccountBoxOutlined, ContactPage, Email, GitHub, HourglassBottomRounded } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

const Header = () => {
  const [show, setShow] = useState(false);


  const [resumePath, setResumePath] = useState();

const fetchResume = async ()  => {
  const snapshot = await firebase.firestore().collection('resume').get()
  return snapshot.docs.map(doc => setResumePath(doc.data()));
}
// console.log('resumePath',resumePath.resume)

useEffect(() => {
  fetchResume()
}, []);

  return (<div className='header'>

    <div className='header__links'>
      <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact </Link>
      <a href={resumePath?.resume}>Resume</a>
    </div>

    <div className='header__middle'>
      <div className='header__search'> <SearchIcon />
        <input type='text' placeholder='Search..'  /></div>

      <div className='toggle'>
        <AddBoxIcon onClick={() => setShow(!show)} /></div>
    </div>


    <div id={show ? "open" : "close"} className='header__icons'>
      <Tooltip title="Contact">
      <Link to="/contact">
        <IconButton>
          <Email />
        </IconButton></Link>
      </Tooltip>

      <Tooltip title="About Me">
      <Link to="/">
        <IconButton>
          <AccountBoxOutlined />
        </IconButton></Link>
      </Tooltip>

      <Tooltip title="GitHub">
      <Link to="#">
        <IconButton>
          <GitHub />
        </IconButton></Link>
      </Tooltip>

    </div>


  </div>)
};

export default Header;
