<script>
import axios from "axios";
import {XAuthToken} from "@/main";

export default {
    data () {
        return {
            matches: [],
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
                const responce = await axios('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/matches', OPTIONS);
                this.matches = responce.data.matches;
                console.log(responce);
                console.log(this.matches);

            } catch (e) {
                console.log(e)
            }
        },
        substring(string){
             let tmp = string.indexOf('T');
            return string.slice(tmp + 1, tmp + 6);
        }
    },
    mounted(){
        this.fetchItems();
    },
}
</script>

<template>
    <v-table>
        <thead>
        <tr>
            <th class="text-center">
                Время
            </th>
            <th class="text-center">
                Домашняя команда
            </th>
            <th class="text-center">
                Счёт
            </th>
            <th class="text-center">
                Гостящая команда
            </th>
        </tr>
        </thead>
        <tbody class="text-center">
        <tr
            v-for="item in matches"
            :key="item.utcDate"
        >
            <td>{{ substring(item.utcDate) }}</td>
            <td><v-img height="20" :src="item.homeTeam.crest"></v-img> {{ item.homeTeam.shortName }}</td>
            <td>{{ item.score.fullTime.home + item.score.halfTime.home }} - {{ item.score.fullTime.away + item.score.halfTime.away }}</td>
            <td><v-img height="20" :src="item.awayTeam.crest"></v-img> {{ item.awayTeam.shortName }}</td>
        </tr>
        </tbody>
    </v-table>
</template>


<style>
.text-center{
    text-align: center;
}
</style>
