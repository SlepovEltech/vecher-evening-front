<template>
  <div>
    <h1>Вечера у Вечерковой</h1>
    <h3>Список гостей</h3>

    <hr>
    <table v-if="this.guests.length" class="table" style="background-color: #8c5a42">
      <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Соц.сети</th>

      </tr>
      </thead>
      <tbody>
        <tr v-for="(guest,idx) of guests" :key="guest.id" >
            <td  v-if="guest.speaker" style="color: #00ff19;">{{idx+1}}</td>
            <td  v-else>{{idx+1}}</td>

            <td  v-if="guest.speaker" style="color: #00ff19;">{{guest.name}}</td>
            <td  v-else>{{guest.name}}</td>

            <td  v-if="guest.speaker" style="color: #00ff19;">{{guest.lastname}}</td>
            <td  v-else>{{guest.lastname}}</td>

            <td  v-if="guest.speaker" style="color: #00ff19;">
              <a v-bind:href="guest.contacts"> {{guest.contacts}}</a>
            </td>
            <td  v-else>
              <a v-bind:href="guest.contacts"> {{guest.contacts}}</a>
            </td>
        </tr>

      </tbody>
    </table>
    <p v-else></p>


  </div>
</template>

<script>
import GuestDataService from "../services/GuestDataService";

export default {
  name: "List",
  data() {
    return {
      guests: [],
    }
  },
  methods: {
    retrieveGuests() {
      GuestDataService.getAll()
          .then(response => {
            this.guests = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },

  },
  computed:{

  },
  mounted() {
    this.retrieveGuests();
  },
  beforeRouteUpdate(){
    this.retrieveGuests();
  }
}
</script>

<style scoped>
  .td {
    max-width : 250px;
  }

  .text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }



</style>