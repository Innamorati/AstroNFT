import axios from "axios";

const UserActions = {

    userSignUp: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, messge: res.data.message, view: true, } })
            // console.log(res.data)
        }
    },
    userLogin: (data) => {
        return async (dispatch, gerState) => {
            const user = await axios.post('http://localhost:4000/api/user/signin', { data });
            // if (user.data.success) {
            //     localStorage.setItem('token', user.data.response.token)
            //     dispatch({ type: 'user', payload: user.data.response.data })
            // }
            // console.log(user);
            // console.log(user.data)
        }
    }
}

export default UserActions;
