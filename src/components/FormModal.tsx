import { Button, Grid, Modal, TextField, } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { submitUserName } from "../redux/slices/mainSlice";

const FormModal = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(submitUserName(e.target[0].value));
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#fff",
          boxShadow: 24,
          p: 4,
        }}
      >
        <form action="" onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Enter Your Name"
                name="name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default FormModal;
