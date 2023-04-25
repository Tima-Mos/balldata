<template>
    <p class="text-center" style="font-size: 20px; font-weight: bold">Это команда {{curTeamName}}</p>
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
                v-for="item in reversedItems"
                :key="item.id"
        >
            <td>{{ timeCut(item.utcDate) }}<br>{{dateCut(item.utcDate)}}</td>
            <td><v-img height="20" :src="item.homeTeam.crest"></v-img> {{ item.homeTeam.shortName }}</td>
            <td>{{ item.score.fullTime.home + item.score.halfTime.home }} - {{ item.score.fullTime.away + item.score.halfTime.away }}</td>
            <td><v-img height="20" :src="item.awayTeam.crest"></v-img> {{ item.awayTeam.shortName }}</td>
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
            matches: [],
            curTeamName: '',
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
                let id = this.$route.params.id;
                const responce = await axios('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/teams/' + id + '/matches', OPTIONS);
                const fetchName = await axios('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/teams/' + id, OPTIONS);
                this.matches = responce.data.matches;
                this.curTeamName = fetchName.data.name;
                console.log(responce);
                console.log(this.matches);

            } catch (e) {
                console.log(e)
            }
        },
        timeCut(string){
            let tmp = string.indexOf('T');
            return string.slice(tmp + 1, tmp + 6);
        },
        dateCut(string){
            return string.slice(0, 10);
        }
    },
    mounted(){
        this.fetchItems();
    },
    computed: {
        reversedItems() {
            return [...this.matches].reverse();
        },
    }
}
</script>

<style scoped>
.text-center{
    text-align: center;
}
</style>