const { createApp } = Vue;

createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: {},
    computed: {
        updateCounter() {
            console.log("updateCounter 1 calisti");
            return this.counter > 5 ? '5 den büyük' : '5 den küçük'
        },
        updateCounter2() {
            console.log("updateCounter 2 calisti");
            return this.counter2 > 5 ? '5 den büyük' : '5 den küçük'
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(oldValue, "=>", newValue);
        },
        updateCounter(newValue, oldValue) {
            console.log(oldValue, "=>", newValue);

        }
    }
}).mount('#app');