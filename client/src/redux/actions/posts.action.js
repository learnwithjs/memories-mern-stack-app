import * as api from '../../api'

// action creators

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data }
        dispatch(action)
    } catch (error) {
        console.log("error at getPosts action", error.message);
    }
}