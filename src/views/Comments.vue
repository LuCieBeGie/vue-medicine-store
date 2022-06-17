<template>
    <div class="comment_page">
        <div>
            <h1 style='color:rgb(176, 133, 255)'>{{this.item.medName}}</h1>
            <h3>{{this.item.count}}</h3>
            <h3>{{this.item.price}}</h3>
            <h3>{{this.item.description}}</h3>
            <ul class="list-unstyled" v-for="com in comments">
                <li>{{com.comment}}</li>
                <span>from:</span>
                <li>{{com.email}}</li>
            </ul>
        </div>
        <form @submit.prevent='submit' class="w-25 mx-auto">
            <textarea type="text" class="form-control" placeholder="Comment" v-model='comment'></textarea>
            <input type="text" class="form-control" placeholder="Email" v-model='email'><br>
            <button class="btn btn-dark" type="submit">Send</button>
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import newComments from '../store/modules/medicine'

    export default {
        data: () => ({
            components: { newComments },
            item: {},
            comments: [],
            id: Math.random(Math.round() * 100),
            comment: '',
            email: '',
            user_id: ''
        }),
        methods: {
            ...mapMutations(['createComments']),
            submit() {
                this.createComments({
                    id: this.id,
                    comment: this.comment,
                    email: this.email,
                    user_id: this.$route.params.id
                })
                this.comment = this.email = ''
                this.comments = this.allComments(this.$route.params.id)

            }
        },
        created() {
            this.comments = this.allComments(this.$route.params.id)
            this.item = this.selectId(this.$route.params.id)
        },
        computed: mapGetters(['selectId', 'allComments']),
    }
</script>