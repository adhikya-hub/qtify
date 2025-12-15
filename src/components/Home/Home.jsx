import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import { useState, useEffect } from "react";
import styles from "./Home.module.css"
import axios from "axios";

import Section from "../Section/Section";
import { Box } from "@mui/material";


const Home=()=>{
    const [searchData,setSearchData]=useState("");
    const [top, setTop]=useState([])
    const [newal,setNewal]=useState([])
    const [songs,setSongs]=useState([])
    

    const perfomApi=async ()=>{

        try{
            const response= await axios.get("https://qtify-backend.labs.crio.do/albums/top")
            const response2= await axios.get("https://qtify-backend.labs.crio.do/albums/new")
            const response3= await axios.get("https://qtify-backend.labs.crio.do/songs")
            console.log("songs",response3.data)
            setTop(response.data)
            setNewal(response2.data)
            setSongs(response3.data)
        }
        catch(e){
            console.log(e.data.message)
        }



    }

    useEffect(()=>{
        perfomApi()
    },[])

   


    return (
        <div className={styles.home}>

        <Navbar searchData={searchData}/>
        <Hero/>
        <Box sx={{ px: "2rem" }}>
  <Section albumname= "Top Albums"  albumlist={top}  />
  </Box>
  <Box sx={{ px: "2rem" }}>
    <Section albumname= "New Albums"  albumlist={newal} />
  </Box>
  <Box sx={{ px: "2rem" }}>
    <Section albumname= "Songs"  albumlist={songs}/>
  </Box>
  


        
        </div>
    )
}

export default Home