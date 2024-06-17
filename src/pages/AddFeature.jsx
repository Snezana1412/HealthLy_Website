import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useFeatures } from "../contexts/featuresContext";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {"Copyright © "}
      <Link color='inherit' href='#'>
        Snezana
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function AddFeature() {
  const { featureState, dispatch } = useFeatures();
  const [newFeature, setNewFeature] = useState({
    title: "",
    description: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    console.log({
      //   email: data.get("email"),
      //   password: data.get("password"),
    });

    dispatch({
      type: "ADD_FEATURE",
      payload: newFeature,
    });
    console.log(featureState);

    navigate("/");
  };
  console.log(featureState);
  console.log(newFeature);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add new feature
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='title'
            label='Title'
            name='title'
            autoFocus
            value={newFeature.title}
            onChange={(e) =>
              setNewFeature({ ...newFeature, title: e.target.value })
            }
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='description'
            label='Description'
            type='description'
            id='description'
            value={newFeature.description}
            onChange={(e) =>
              setNewFeature({ ...newFeature, description: e.target.value })
            }
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='img'
            label='Icon'
            type='img'
            id='img'
            value={newFeature.img}
            onChange={(e) =>
              setNewFeature({ ...newFeature, img: e.target.value })
            }
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Add feature
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
