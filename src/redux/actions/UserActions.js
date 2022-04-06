import axios from "axios";

const UserAcctions = {

    userSingUp: (data) => {
        return async (dispatch, gerState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, messge: res.data.message, view: true, } })
            console.log(res)
            console.log(res.data)
        }
    }
}

export default UserAcctions