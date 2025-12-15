import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SwiperAlbum from "../SwiperAlbum/SwiperAlbum";

export default function TabAlbum({ albumlist }) {
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  const filterByGenre = (genre) => {
    
    return albumlist.filter((album) => album.genre.key === genre);
  };
 


  const tabStyle = {
    color: "#fff",
    "&.Mui-selected": {
      color: "#fff",
    },
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
              height: "3px",
            },
          }}
        >
          <TabList onChange={handleChange}>
            <Tab label="All" value="all" sx={tabStyle} />
            <Tab label="Rock" value="rock" sx={tabStyle} />
            <Tab label="Pop" value="pop" sx={tabStyle} />
            <Tab label="Jazz" value="jazz" sx={tabStyle} />
            <Tab label="Blues" value="blues" sx={tabStyle} />
          </TabList>
        </Box>

        <TabPanel value="all">
          <SwiperAlbum isSongs albumlist={albumlist} />
        </TabPanel>

        <TabPanel value="rock">
          <SwiperAlbum isSongs albumlist={filterByGenre("rock")} />
        </TabPanel>

        <TabPanel value="pop">
          <SwiperAlbum isSongs albumlist={filterByGenre("pop")} />
        </TabPanel>

        <TabPanel value="jazz">
          <SwiperAlbum isSongs albumlist={filterByGenre("jazz")} />
        </TabPanel>

        <TabPanel value="blues">
          <SwiperAlbum isSongs albumlist={filterByGenre("blues")} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
