export const tabsFunction = {
    data(){
        return{
            tabElem: 0
        }
    },
    methods:{
        nextTab: function(index){
            this.tabElem = index;
        }
    }
}