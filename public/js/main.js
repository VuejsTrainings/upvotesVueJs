//import submissions from './seed';
new Vue({
    el:'#app',
    data: {
        submissions: Seed().submissions
    },
    computed: {
        topSubmissionsFirst() {
            return this.submissions.sort( (a,b) => b.votes - a.votes )
        }
    }
});