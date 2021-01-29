export const resetPassword = {
    namespaced: true,
    actions: {

    },
    state:{
        email: '',
    },
    mutations:{
        setState(state, payload){
            state = payload;
        }
    },
    getters:{
        getState: state => state
    }
}