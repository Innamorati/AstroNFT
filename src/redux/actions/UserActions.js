import axios from "axios";

const UserActions = {

    userSignUp: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, messge: res.data.message, view: true, } })
            console.log(res)
            console.log(res.data)
        }
    }
}

export default UserActions;