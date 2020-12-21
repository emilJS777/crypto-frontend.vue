export const validationFunction = {
    data(){
        return{
            emailValid: true,
            passwordValid: true,
            regionValid: true
        }
    },
    methods:{
        validForm: function(e){
            let email = document.getElementById('email');
            let password = document.getElementById('password');

            if(email.value === ''){
                this.emailValid = false
            }
            if(password.value === ''){
                this.passwordValid = false
            }
            e.preventDefault();
        }
    }
}