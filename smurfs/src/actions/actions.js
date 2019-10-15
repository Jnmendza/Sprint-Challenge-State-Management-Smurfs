import axios from 'axios'


export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const POST_START = 'POST_START'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
          console.log("get res data here",res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response });
      });
  };

  export const postSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_START });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log('post res here',res)
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_FAILURE, payload: err.response.status });
      });
  };