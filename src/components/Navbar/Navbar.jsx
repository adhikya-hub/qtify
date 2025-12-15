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
      <Box >
        <Logo />
        </Box>
      </Link>
      <Search
        searchData={searchData}
      />
      <Box >
      <ButtonC />
      </Box>
        
    </nav>
  );
}

export default Navbar;
