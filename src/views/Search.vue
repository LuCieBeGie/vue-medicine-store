<template>
    <div class="d-flex flex=wrap">
        <div class="" v-for=" el in searchResults">
            <h1 style='color:rgb(176, 133, 255)'>{{el.medName}}</h1>
            <h3>{{el.count}}</h3>
            <h3>{{el.price}}</h3>
            <h3>{{el.description}}</h3>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data: () => ({
            searchResults: []
        }),
        computed: mapGetters(['filterDrugs']),
        created() {
            this.searchResults = this.filterDrugs(this.$route.params.search)
        }
    }
</script>