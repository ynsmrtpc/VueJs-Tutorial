const { createApp } = Vue;

createApp({
    data() {
        return {
            showBorder: false,
            redBG: false,
            boxClass: 'border',
            bgColor: 'cyan',
        }
    },
    computed: {
        boxClasses() {
            return {
                border: this.showBorder,
                red: this.redBG,
            }
        }
    }
}).mount('#app');
