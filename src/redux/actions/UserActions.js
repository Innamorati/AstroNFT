import axios from "axios";

const userActions = {

    userSingUp: (data) => {
        console.log(data)
        return async (dispatch, gerState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true, } })
        }
    },
    userLogin: (data) => {
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
    }
}

export default userActions