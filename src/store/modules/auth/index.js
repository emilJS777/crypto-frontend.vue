import {register} from "./register"
import {login} from "./login";
import {resetPassword} from "./reset-password";
import {completeAccountSetup} from "./complete-account-setup";

export const auth = {
    namespaced: true,
    modules:{
        register,
        login,
        resetPassword,
        completeAccountSetup,
    }
}