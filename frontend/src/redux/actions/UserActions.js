import axios from "axios";

const UserActions = {

    userSignUp: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('https://astronft.herokuapp.com/api/user/singup', { data })
            dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true, } })
        }
    },
    userLoging: (data) => {
        return async (dispatch, gerState) => {
            const res = await axios.post('https://astronft.herokuapp.com/api/user/signin', { data });
            if (res.data.success) {
                dispatch({ type: 'user', payload: { user: res.data.response.user, success: res.data.success, message: res.data.message, view: true } })
                localStorage.setItem('token', res.data.response.token)
            }

        }
    },
    userLogout: (data) => {
        return async (dispatch, getState) => {
            const user = axios.post('https://astronft.herokuapp.com/api/user/logout', { data })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: { user: null, view: false, message: '' } })
        }
    },
    verifiedToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get('https://astronft.herokuapp.com/api/user/token', { headers: { 'Authorization': 'Bearer ' + token } })
            if (user.data.success) {
                dispatch({ type: 'user', payload: { message: user.data.response.message, user: user.data.response, success: user.data.success, view: true } })
            }
            else {
                localStorage.removeItem('token')
            }
        }
    },
    addToBasket: (id, userId) => {
        return async (dispatch, getSatate) => {
            const addNft = await axios.post(`https://astronft.herokuapp.com/api/bascket`, { id, userId, })
            if (addNft.data.success) {
                const token = localStorage.getItem("token")
                const user = await axios.get('https://astronft.herokuapp.com/api/user/token', { headers: { 'Authorization': 'Bearer ' + token } })
                dispatch({ type: 'user', payload: { message: addNft.data.response.message, user: user.data.response, success: addNft.data.success, view: true } })
            }
        }
    },
    delteNftToBasket: (id) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const deleteNft = await axios.post(`https://astronft.herokuapp.com/api/basket/${id}`, { headers: { 'Authorization': 'Bearer ' + token }, })
            if (deleteNft.data.success) {
                const user = await axios.get('https://astronft.herokuapp.com/api/user/token', { headers: { 'Authorization': 'Bearer ' + token } })
                dispatch({ type: 'user', payload: { message: deleteNft.data.response.message, user: user.data.response, success: deleteNft.data.success, view: true } })
            }
        }
    },
    deleteAllBasket: (id) => {
        console.log(id)
        return async (dispatch, getState) => {
            const DeleteAllBasket = await axios.post(`http://localhost:4000/api/deleteAllBasket/${id}`)
        }
    }
}

export default UserActions;
