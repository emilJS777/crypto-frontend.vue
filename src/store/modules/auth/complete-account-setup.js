export const completeAccountSetup = {
    namespaced: true,
    actions: {

    },
    state:{
        firstName: '',
        lastName: '',
        date: '',
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