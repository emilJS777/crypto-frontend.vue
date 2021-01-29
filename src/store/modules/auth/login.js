export const login = {
    namespaced: true,
    actions: {

    },
    state:{
        email: '',
        password: '',
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