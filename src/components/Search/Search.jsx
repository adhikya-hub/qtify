import {
  InputAdornment,
  Box,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export default function Search({searchData}){

    return (
        <>
        

<TextField
  className="search"
  size="small"
  variant="outlined"
  value={searchData || ""}
  placeholder="search a song"
  name="search"
  sx={{border: "1.5px solid #000",
    borderRadius: "8px",
    backgroundColor: "#fff"
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <Box
          sx={{
            height: "35px",
            borderLeft: "1.5px solid #000",
            mx: 1,
          }}
        />
        <SearchIcon color="primary" />
      </InputAdornment>
    ),
  }}
/>

        </>
    )
}