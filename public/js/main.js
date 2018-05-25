//import submissions from './seed';
new Vue({
    el:'#app',
    data: {
        submissions: Seed().submissions
    }
});