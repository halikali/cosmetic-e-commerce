export const getPhoto = () => {
    return (dispatch) => {
      dispatch({ type: "GET_PHOTO_REQUEST" });
      fetch("https://picsum.photos/id/10/info")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "GET_PHOTO_SUCCESS", payload: data }))
        .catch((error) => dispatch({ type: "GET_PHOTO_ERROR", payload: error }));
    };
};
  