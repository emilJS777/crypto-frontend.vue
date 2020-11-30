export const carouselFunction = {
    data(){
        return{
            slide: 0
        }
    },
    methods:{
        carousel: function(index){
            this.slide = -100 * index;
        }
    }
}