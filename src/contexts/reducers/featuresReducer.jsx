import { v4 as uuidv4 } from "uuid";

export const featuresReducer = (featureState, action) => {
  const { type, payload } = action;
  const copyOfState = JSON.parse(JSON.stringify(featureState));
  let newId;
  let idExists;

  switch (type) {
    case "FETCH_FEATURES":
      return [...payload];
    case "ADD_FEATURE":
      console.log(payload);
      newId = uuidv4();
      idExists = copyOfState.find((feature) => feature._id === newId);
      if (idExists) {
        newId = uuidv4();
        return [...copyOfState, { ...payload, _id: newId }];
      } else {
        return [...copyOfState, { ...payload, _id: newId }];
      }

    case "EDIT_FEATURE":
      return copyOfState.map((feature) => {
        if (feature._id === payload._id) {
          return payload;
        } else {
          return feature;
        }
      });
    case "DELETE_FEATURE":
      return copyOfState.filter((feature) => feature._id !== payload);
    default:
      return featureState;
  }
};
