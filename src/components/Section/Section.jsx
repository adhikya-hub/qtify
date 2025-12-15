import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Section.module.css"
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import SwiperAlbum from "../SwiperAlbum/SwiperAlbum";
import TabAlbum from "../TabAlbum/TabAlbum"

export default function Section({albumname,albumlist}){

    const [toggle,setToggle]=useState("Show All")

    if(albumname==="Songs"){
        return(
            <>
            <Box
  sx={{
    borderTop: "2px solid #34C94B",
    borderBottom: "2px solid #34C94B",
  }}
>
  <Box >
                <Typography gutterBottom variant="h6" component="div" sx={{
    marginTop: 4,
    marginBottom: 2
  }}>
                        {albumname}
                </Typography>
        </Box>
        <TabAlbum albumlist={albumlist}/>
</Box>


        
        </>

        )
    }

    return (
        <>
        <Box className={styles.sectionHeader}>

    <Typography gutterBottom  variant="h6" component="div" sx={{
    
    marginBottom: 2
  }}>
            {albumname}
          </Typography>

    <Button sx={{color:"#34C94B", textTransform: "none"}} onClick={()=>{
        (toggle!=="Show All") ? setToggle("Show All") : setToggle("Collapse")
    }
    }>

        {toggle==="Show All"? "Show All" : "Collapse"}
        
    </Button>

        </Box>

{toggle==="Show All" && 
    (<SwiperAlbum albumlist={albumlist}/>) }

{toggle==="Collapse" && 

(<Grid container rowSpacing={3} columnSpacing={2}>
    {albumlist.map(album=>{
    return (
            
  <Grid size={2} key={album.id}>
    <AlbumCard album={album}/>
  </Grid>
        )    
        })
    }

   </Grid>)}

    </>
    

  );

   
    
      
    

  
};
