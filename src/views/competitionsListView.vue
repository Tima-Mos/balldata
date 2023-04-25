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
                v-for="item in comps"
                :key="item.id"
        >
            <td><v-img height="20" :src="item.emblem"></v-img></td>
            <td class="text-left"> {{ item.name }}</td>
            <td class="text-right"> <v-btn @click="$router.push(`/comps/${item.id}`)">Матчи</v-btn></td>

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
            comps: [],
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
                const responce = await axios('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions', OPTIONS);
                this.comps = responce.data.competitions;
                console.log(responce);
                console.log(this.comps);

            } catch (e) {
                console.log(e)
            }
        },
        goToCompMatches(comp){

        }
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