export const switchFunction = {
    data(){
        return{
            switchElem: 0
        }
    },
    methods:{
        show: function(index){
            this.switchElem = index;
        }
    }
}