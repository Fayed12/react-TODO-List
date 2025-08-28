import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import Loading from "./loading/loadin";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import FailFillAllInputs from "./inputTaskFilled/faild/faild";
import SuccessFillTask from "./inputTaskFilled/success/success";

export default function AddTaskPopup({ tasksValue, onchange }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  let [taskId, setTaskId] = useState(1);
  const [loadingDelay, setLoadingDelay] = useState(false);
  const [failPopup, setFailPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);


  // function handle adding new task
  function handleAddTasks() {
    if (task.trim() !== "" && description.trim() !== "") {
      onchange([
        ...tasksValue,
        { id: taskId, taskTitle: task, taskDescription: description },
      ]);
      setTask("");
      setDescription("");
      setOpen(false);
      setTaskId(taskId + 1);
      setSuccessPopup(true)
      setTimeout(() => {
        setSuccessPopup(false)
      }, 4000);
    } else {
      setFailPopup(true);
      setTimeout(() => {
      setFailPopup(false);
      }, 4000);

      return;
    }
  }

  // function to handle got to all tasks if the user want to add new tasks

  function handleNavigateToAllTasks() {
    setLoadingDelay(true)
    setTimeout(() => {
      navigate("/todo/allTasks", { replace: true })
      setLoadingDelay(false);
      setOpen(true);
    }, 2000);
  }
  return (
    <>
      <Box>
        <Button
          title="add task"
          className="add-task-button"
          variant="contained"
          onClick={() => handleNavigateToAllTasks()}
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#dee9f2ff",
            color: "#1e88e5",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { backgroundColor: "#c1def6ff" },
          }}
        >
          <AddIcon fontSize="large" />
        </Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            backdropFilter: "blur(6px)",
            "& .MuiDialog-paper": {
              backgroundColor: "#121212",
              color: "white",
            },
          }}
        >
          <DialogTitle sx={{ backgroundColor: "#121212", color: "white" }}>
            Add New Task
          </DialogTitle>

          <DialogContent sx={{ backgroundColor: "#121212" }}>
            {/* Title */}
            <TextField
              autoFocus
              margin="dense"
              label="Task Title"
              type="text"
              fullWidth
              variant="outlined"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#42a5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />

            {/* Description */}
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#42a5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
                mt: 2,
              }}
            />
            <FailFillAllInputs open={failPopup} />
          </DialogContent>

          <DialogActions sx={{ backgroundColor: "#121212" }}>
            <Button onClick={() => setOpen(false)} sx={{ color: "white" }}>
              Cancel
            </Button>
            <Button
              onClick={handleAddTasks}
              sx={{
                backgroundColor: "#42a5f5",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#1e88e5" },
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <SuccessFillTask open={successPopup} />
      {loadingDelay && <Loading />}
    </>
  );
}
