import axios from "axios";

const UserActions = {

    userSignUp: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true, } })
        }
    },
    userLoging: (data) => {
        return async (dispatch, gerState) => {
            const res = await axios.post('http://localhost:4000/api/user/signin', { data });
            console.log(res.data.response.user)
            if (res.data.success) {
                dispatch({ type: 'user', payload: { user: res.data.response.user, success: res.data.success, message: res.data.message, view: true } })
                localStorage.setItem('token', res.data.response.token)
            }

        }
    },
    userLogout: (data) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/user/logout', { data })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: { user: null, view: false, message: '' } })
        }
    },
    verifiedToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get('http://localhost:4000/api/user/token', { headers: { 'Authorization': 'Bearer ' + token } })
            if (user.data.success) {
                dispatch({ type: 'user', payload: { message: user.data.response.message, user: user.data.response, success: user.data.success, view: true } })
            }
            else {
                localStorage.removeItem('token')
            }
        }
    }
}

export default UserActions;
