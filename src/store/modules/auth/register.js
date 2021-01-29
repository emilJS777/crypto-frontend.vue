export const register = {
    namespaced: true,
    actions: {

    },
    state:{
        email: '',
        password: '',
        confirmPassword: '',
    },
    mutations:{
        setState(state, payload){
            state = payload;
            console.log(state);
        }
    },
    getters:{
        getState: state => state
    }
}