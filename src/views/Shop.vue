<template>
    <div class="shop">
        <table class="table table-hover" selectionMode="multiple">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="med in allMedicine" :key="med.id" @click="selectDrugs(med)"
                    v-bind:class="{ active: med.active }">
                    <td>{{med.medName}}</td>
                    <td>{{med.count}}</td>
                    <td>{{med.price}}</td>
                    <td>
                        <button class="btn btn-dark" @click.stop="selectDrugs(med)">
                            <router-link :to="`/shop/${med.id}`">
                                See More
                            </router-link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <form class="search input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" v-model='search'>
            <button class="btn btn-dark" type="submit">
                <router-link :to="`/shop/search/${search}`">Search</router-link>
            </button>
        </form>
        <div>
            <button class="btn btn-primary" @click="buyDrugs()">Buy</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import med from '../store/modules/medicine'
    export default {
        data: () => ({
            search: '',
            active: [],
        }),
        components: { med },
        computed: {
            ...mapGetters(['allMedicine']),
        },
        methods: {
            ...mapMutations(['selectDrugs', 'buyDrugs'])
        },
    }
</script>

<style>
    body {
        background-color: rgb(255, 230, 254);
    }

    .search {
        display: flex;
        width: 50%;
        margin: auto;
    }

    .search>button {
        height: 100%;
    }

    .active {
        /* border: 2px solid rgb(7, 255, 214); */
        background-color: lightblue
    }
    
</style>