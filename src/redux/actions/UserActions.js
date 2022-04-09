import axios from "axios";

const UserActions = {
<<<<<<< HEAD
  userSignUp: (data) => {
    return async (dispatch, getState) => {
      const res = await axios.post("http://localhost:4000/api/user/singup", {
        data,
      });
      dispatch({
        type: "user",
        payload: {
          success: res.data.success,
          messge: res.data.message,
          view: true,
        },
      });
      // console.log(res.data)
    };
  },
  userLogin: (data) => {
    return async (dispatch, gerState) => {
      const user = await axios.post("http://localhost:4000/api/user/signin", {
        data,
      });
      // if (user.data.success) {
      //     localStorage.setItem('token', user.data.response.token)
      //     dispatch({ type: 'user', payload: user.data.response.data })
      // }
      // console.log(user);
      // console.log(user.data)
    };
  },
};
=======

    userSignUp: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true, } })
        }
    },
    userLoging: (data) => {
        return async (dispatch, gerState) => {
            const res = await axios.post('http://localhost:4000/api/user/signin', { data });
            console.log(res)
            if (res.data.success) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true, user: res.data.response.userData } })
            }
            console.log(res);
            console.log(res.data)
        }
    },
    userLogout: (data) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/user/logout', { data })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: { user: null, view: false, message: '' } })
        }
    }
}
>>>>>>> 4b53127a1e64e586281a567bd0ebc569db2cee2f

export default UserActions;
