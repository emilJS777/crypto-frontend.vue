export const validationFunction = {
    data(){
        return{
            emailValid: true,
            passwordValid: true,
            regionValid: true,

            router: true
        }
    },
    methods:{
        validForm: function(e){
            let email = document.getElementById('email');
            let password = document.getElementById('password');


            if(email.value === ''){
                this.emailValid = false
                this.router = false
            }
            if(email.value !== ''){
                this.emailValid = true
            }
            if(password.value === ''){
                this.passwordValid = false
                this.router = false
            }


            if(!this.router)
                e.preventDefault()
        }
    }
}