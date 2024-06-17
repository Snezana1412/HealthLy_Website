import { Button, TextField } from "@mui/material";
import "./Feature.scss";
import Textarea from "@mui/joy/Textarea";

import { useFeatures } from "../../contexts/featuresContext";
import { useState } from "react";

function Feature({ feature }) {
  const { featuresState, dispatch } = useFeatures();

  const [currentFeature, setCurrentFeature] = useState({});
  const [editMode, setEditMode] = useState(false);

  const isLogged = localStorage.getItem("isLogged");

  const saveChanges = (id) => {
    setEditMode((editMode) => !editMode);
    setCurrentFeature(featuresState.find((feature) => feature._id === id));
    dispatch({ type: "EDIT_FEATURE", payload: currentFeature });
  };

  const deleteFeature = (e, id) => {
    e.preventDefault();
    setCurrentFeature(featuresState.find((feature) => feature._id === id));
    dispatch({ type: "DELETE_FEATURE", payload: currentFeature._id });
    //navigate("/");
  };

  return (
    <div className='awesome-feature two media'>
      <div className='awesome-feature-icon media-left'>
        <span>
          <i className={`icofont icofont-${feature.img}`}></i>
        </span>
      </div>
      <div className='asesome-feature-details media-body'>
        {editMode ? (
          <TextField
            margin='normal'
            fullWidth
            type='text'
            value={currentFeature.title}
            onChange={(e) =>
              setCurrentFeature({ ...currentFeature, title: e.target.value })
            }
          />
        ) : (
          <h5>{feature.title}</h5>
        )}
        {editMode ? (
          <Textarea
            margin='normal'
            name='description'
            label='description'
            minRows={3}
            id='description'
            value={currentFeature.description}
            sx={{
              "--Textarea-focused": 1,
            }}
            onChange={(e) =>
              setCurrentFeature({
                ...currentFeature,
                description: e.target.value,
              })
            }
          />
        ) : (
          <p>{feature.description}</p>
        )}
      </div>
      {isLogged ? (
        <Button variant='contained' onClick={() => saveChanges(feature._id)}>
          {editMode ? "Save" : "Edit"}
        </Button>
      ) : null}
      {isLogged ? (
        <Button
          variant='contained'
          onClick={() => deleteFeature(event, feature._id)}>
          Delete
        </Button>
      ) : null}
    </div>
  );
}

export default Feature;
