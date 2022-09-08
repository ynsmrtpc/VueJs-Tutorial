const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'test baslik',
            itemlist: [],
        }
    },
    beforeCreate() { console.log('beforeCreate calisti') }, // beforeCreate hook
    created() {
        console.log('created calisti')
        setTimeout(() => {
            this.title = 'yeni baslik'
        }, 2000)
        setTimeout(() => {
            this.itemlist = ['elma', 'armut', 'kiraz', 'çilek']
        }, 2000)
    }, // created hook
    beforeMount() { console.log('beforeMount calisti') }, // beforeMount hook
    mounted() { console.log('mounted calisti') }, // mounted hook
    beforeUpdate() { console.log('beforeUpdate calisti') }, // beforeUpdate hook
    updated() { console.log('updated calisti') }, // updated hook
    beforeUnmount() { console.log('beforeUnmount calisti') }, // beforeUnmount hook
    unmounted() { console.log('unmounted calisti') }, // unmounted hook
}).mount('#app');


// setTimeout(() => {
//     createApp.unmount();
// }, 5000) // unmount app after 5 seconds