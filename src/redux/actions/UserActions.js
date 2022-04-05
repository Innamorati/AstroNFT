import axios from "axios";

const UserAcctions = {

    userSingUp: (data) => {
        return async (dispatch, gerState) => {
            const res = await axios.post('http://localhost:4000/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, mensaje: res.data.message } })
            console.log(res)
        }
    }
}

export default UserAcctions