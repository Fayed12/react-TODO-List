import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField({ inputValue, onchange }) {
  return (
    <Box
      component="form"
      sx={{
        borderRadius: "20px",
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        placeholder="Search..."
        variant="outlined"
        value={inputValue}
        onChange={(e) => onchange(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#c3ced7ff", fontSize: 22 }} />
            </InputAdornment>
          ),
          style: { color: "black", borderRadius: "15px" },
        }}
        sx={{
          borderRadius: "15px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#bcccd8ff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bcccd8ff",
            },
          },
          boxShadow: "0px 0px 10px #84b4dbff",
        }}
      />
    </Box>
  );
}
