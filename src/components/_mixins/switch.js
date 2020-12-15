export const switchFunction = {
    data(){
        return{
            switchElem: false
        }
    },
    methods:{
        show: function(){
            this.switchElem = !this.switchElem;
        }
    }
}