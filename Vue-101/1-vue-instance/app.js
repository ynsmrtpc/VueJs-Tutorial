const { createApp } = Vue

createApp({
    data() {
        return {
            msg: 'junior yunus',
            eduflow: {
                url: 'https://eduflow.com',
                target: '_blank',
                text: 'Eduflow',
                alt: 'Eduflow'
            },
            coords: {
                x: 0,
                y: 0
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        }
    },
    methods: {
        changeTitle(pTitle) {
            this.msg = pTitle;
        },
        updateCoords(message, event) {
            this.coords = {
                x: event.x,
                y: event.y,
            }
            this.changeTitle(`${event.x}, ${event.y}`);

        }
    }
}).mount('#app')