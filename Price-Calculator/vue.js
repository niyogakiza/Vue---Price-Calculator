// Registering a component

Vue.component('item', {
    template: '#temp',
    data: function(){
        return{

        }
    },
    props:['label', 'value'],// prop declaration
    methods:{
        send(ev){
            //sending event to Vue data
            this.$emit('input', ev)
        }
    }
});





let vm = new Vue({
    el: '#app',
    data: {
        price: 0,
        shipping: 0,
        discount: 0,
        wrapping: 0

    },
    computed:{

        total(){
            //data conversion
            this.price = Number(this.price);
            this.shipping = Number(this.shipping);
            this.discount = Number(this.discount);
            this.wrapping= Number(this.wrapping);

            return this.price + this.shipping + this.wrapping - this.discount;
        }
    }

});