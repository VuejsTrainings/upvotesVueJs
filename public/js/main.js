const submissionComponent = {
    props : ['submission'],
    methods: {
        augmentVotes(submission){
            submission.votes++;
        }
    },
    template:`
    <div style="display:flex;width:100%">
        <figure class="media-left">
            <img v-bind:src="submission.picture" alt="" class="image is-64x64">
        </figure>
        <div class="media-content">
            <div class="content">
                <h4>
                    <a v-bind:href="submission.url" class="has-text-info">{{ submission.title }}</a>
                    <span class="tag is-small">#{{ submission.id }}</span>
                </h4>
                <p>
                    {{ submission.description }}
                </p>
                <p>
                    <small class="is-size-7">
                        Submitted by:
                        <img v-bind:src="submission.avatar" alt="" class="image is-24x24">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small">
                <i class="fa fa-chevron-up" v-on:click="augmentVotes(submission)"></i>
                <strong class="has-text-info">{{ submission.votes }}</strong>
            </span>
        </div>
    </div>
    `
};


new Vue({
    el:'#app',
    data: {
        submissions: Seed().submissions
    },
    computed: {
        topSubmissionsFirst() {
            return this.submissions.sort( (a,b) => b.votes - a.votes )
        }
    },
    components : {
        'submission-component':submissionComponent
    }
});