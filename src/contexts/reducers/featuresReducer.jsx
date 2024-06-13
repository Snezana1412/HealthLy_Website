export const featuresReducer = (featureState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_FEATURES":
      return { ...featureState, features: payload };
    default:
      return featureState;
  }
};
