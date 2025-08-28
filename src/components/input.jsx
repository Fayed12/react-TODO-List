import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  let inputValue = props.inputValue;
  let setInputValue = props.onchange;

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e)}
        InputLabelProps={{
          style: { color: "white" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          boxShadow: "0px 0px 10px #84b4dbff",
        }}
      />
    </Box>
  );
}
