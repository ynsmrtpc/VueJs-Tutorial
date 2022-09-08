const { createApp } = Vue;

createApp({
    data() {
        return {
            fullname: null,
        }
    },
    methods: {
        // updateValue(event) {
        //     console.log(event.target.value);
        //     this.fullname = event.target.value;
        // }
    }
}).mount('#app');