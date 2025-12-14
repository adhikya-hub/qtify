import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import ButtonC from "../ButtonC/ButtonC";

import { Box } from "@mui/material";


function Navbar({ searchData }) {

  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <Box sx={{px:"1rem"}}>
        <Logo />
        </Box>
      </Link>
      <Search
        searchData={searchData}
      />
      <Box sx={{px:"1rem"}}>
      <ButtonC />
      </Box>
        
    </nav>
  );
}

export default Navbar;
