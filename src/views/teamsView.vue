<template>
    <v-table>
        <thead>
        <tr>
            <th>
                Эмблема
            </th>
            <th class="text-left">
                Название
            </th>
            <th>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="item in teams"
                :key="item.id"
        >
            <td><v-img height="20" :src="item.crest"></v-img></td>
            <td class="text-left"> {{ item.name }}</td>
            <td class="text-right"> <v-btn @click="$router.push(`/teams/${item.id}`)">Матчи</v-btn></td>

        </tr>
        </tbody>
    </v-table>
</template>

<script>
import axios from "axios";
import {XAuthToken} from "@/main";

export default {
    data () {
        return {
            teams: [],
        }
    },
    methods: {
        async fetchItems(){
            try {
                const OPTIONS = {
                    method: 'GET',
                    headers: {
                        'X-Auth-Token': XAuthToken,
                    }
                };
                const responce = await axios('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/teams', OPTIONS);
                this.teams = responce.data.teams;
                console.log(responce);
                console.log(this.teams);

            } catch (e) {
                console.log(e)
            }
        },
    },
    mounted(){
        this.fetchItems();
    },
}
</script>

<style scoped>
.text-right{
    text-align: right;
}
.text-left{
    text-align: left;
}
</style>