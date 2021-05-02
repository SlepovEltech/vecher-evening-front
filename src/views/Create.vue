<template>

  <div class="row">

    <div class="col s8 offset-s2">
        <h1>Вечера у Вечерковой 25.06</h1>

        <form @submit.prevent="submitHandler">

          <div class="input-field">
            <input  v-model="name" id="name" type="text" class="colortext" required>
            <label for="name" class="active">Имя</label>
          </div>

          <div class="input-field">
            <input  v-model="lastname" id="lastname" type="text" class="colortext" required>
            <label for="lastname" class="active">Фамилия</label>
          </div>

          <div class="input-field">
            <input  v-model="contacts" id="contacts" type="url" class="colortext" required>
            <label for="contacts" class="active">Ссылка на социальные сети(vk/instagram)</label>
          </div>

          <div class="row">
            <div class="input-field col s4">
              <label>
                <input type="checkbox" v-model="speaker" class="filled-in checkbox-dark-amber" checked="checked"  />
                <span>Хочу выступить</span>
              </label>
            </div>

            <div class="input-field col s8">
              <label>
                <input type="checkbox" v-model="agreement" class="filled-in checkbox-dark-amber" checked="checked" required/>
                <span>Я готов оплатить 250р за входной билет</span>
              </label>
            </div>

          </div>

          <br> <br>
          <button class="btn btn-primary amber darken-3" type="submit">Зарегистрироваться</button>

        </form>
<      <button class="btn btn-primary amber darken-3" @click="test" >ПОКАЗАТЬ</button>

    </div>
    </div>

</template>


<script>
import GuestDataService from "@/services/GuestDataService";


export default {
  name: "Registration",
  components: {

  },
  data: () => ({
    lastname: '',
    name: '',
    contacts: '',
    speaker: false,
    agreement: false,
    showModal: false
  }),

  methods:{
    async submitHandler(){
      const guest ={
        name : this.name,
        lastname : this.lastname,
        speaker : this.speaker.valueOf(),
        contacts : this.contacts
      }
      //console.log(guest);
      let serverResponse = '';
      GuestDataService.create(guest)
          .then(response => {
            guest.id = response.data.id;
            serverResponse = response.data.message;
            this.$router.push({name: 'success', params: { message: serverResponse }});
          })
          .catch(e => {
            console.log(e);
          });

    },
    test(){
      this.$router.push({name: 'list'});
    },

  },
  destroyed(){

  }
}
</script>

<style>

.input-field input[type]:not([readonly]),
.input-field input[type]:focus:not([readonly]),
.input-field textarea:not([readonly]),
.input-field textarea:focus:not([readonly]) {
  border-bottom: 1px solid #ff8f00;
  box-shadow: 0 1px 0 0 #ff8f00;
}

.input-field input[type]:focus:not([readonly])+label,
.input-field textarea:focus:not([readonly])+label {
  color: #ff8f00;
}

.input-field input[type].invalid,
.input-field input[type].invalid:focus,
.input-field textarea.invalid,
.input-field textarea.invalid:focus {
  border-bottom: 1px solid #ff8f00;
  box-shadow: 0 1px 0 0 #ff8f00;
}

.input-field input[type].invalid:focus+label,
.input-field input[type].invalid~.helper-text::after,
.input-field input[type].invalid:focus~.helper-text::after,
.input-field textarea.invalid:focus+label,
.input-field textarea.invalid~.helper-text::after,
.input-field textarea.invalid:focus~.helper-text::after {
  color: #ff8f00;
}

.input-field input[type].valid,
.input-field input[type].valid:focus,
.input-field textarea.valid,
.input-field textarea.valid:focus {
  border-bottom: 1px solid #ff8f00;
  box-shadow: 0 1px 0 0 #ff8f00;
}

.input-field input[type].valid:focus+label,
.input-field input[type].valid~.helper-text::after,
.input-field input[type].valid:focus~.helper-text::after,
.input-field textarea.valid:focus+label,
.input-field textarea.valid~.helper-text::after,
.input-field textarea.valid:focus~.helper-text::after {
  color: #ff8f00;
}

.checkbox-dark-amber[type="checkbox"].filled-in:checked+span:not(.lever):after {
  border: 2px solid #ff8f00;
  background-color: #ff8f00;
}

.bggg{
background: black;
background-size: cover;
}

.colortext {
  background-color: #ffe; /* Цвет фона */
  color: white; /* Цвет текста */
}


.customModal {
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.4);
  left: calc(50vw - 300px);
  position: absolute;
  z-index: 999;
  width: 600px;
  top: 20vh;
  border-radius: 5px;
  overflow: hidden;
}
.customModal .customModalTitle {
  background-color: #eee;
  text-align: left;
  padding: 8px 12px;
  font-size: 1.5em;
}
.customModal .customModalTitle .close {
  line-height: 32px;
  color: #5c4084;
}
.customModal .customModalBody {
  background-color: #fff;
  padding: 8px 12px;
  text-align: left;
  padding: 12px;
}
.customModal .customModalFooter {
  background-color: #eee;
  padding: 4px 12px;
  text-align: left;
}
</style>
