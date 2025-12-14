import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import { useState } from "react";

const Home=()=>{
    const [searchData,setSearchData]=useState("")
    return (
        <>

        <Navbar searchData={searchData}/>
        <Hero/>
        
        </>
    )
}

export default Home