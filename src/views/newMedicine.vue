<template>
  <div class="myForm">
    <img v-bind:src="img" class="img" />
    <div class="centered">
      <form @submit.prevent='submit'>
        <input type="text" placeholder="Name" v-model='medName'>
        <input type="text" placeholder="Price" v-model='price'>
        <input type="text" placeholder="Count" v-model='count'>
        <select v-model='selCompany'>
          <option value="" disabled selected>Select Producer Company</option>
          <option v-for="company in prodCompany" :value="company">{{ company }}</option>
        </select>
        <textarea name="" id="" v-model='description' placeholder="Description"></textarea>
        <button type="submit" class="btn btn-info">Add a Medicine</button>
      </form>
    </div>
  </div>
</template>
<script>
  import img from '/public/img/3.jpg'
  import { mapMutations } from 'vuex'
  import newMedicine from '../store/modules/medicine'

  export default {
    data() {
      return {
        img: img,
        components: { newMedicine },
        prodCompany: [
          'Novo Nordisk (Denmark)',
          'Bayer AG (Germany)',
          'Gilead Sciences (US)',
          'Amgen Inc (US)',
          'Eli Lilly (US)',
          'AstraZeneca plc (UK)',
          'GlaxoSmithKline plc (UK)',
          'Bristol-Myers Squibb (US)',
          'Sanofi S.A. (France)',
          'AbbVie Inc (US)',
          'Merck & Co., Inc (US)',
          'Johnson & Johnson (US)',
          'Novartis International AG (Switzerland)',
          'Hoffmann-La Roche AG (Switzerland)',
          'Pfizer Inc (US)'],
        id: Math.random(Math.round() * 100),
        medName: '',
        price: '',
        count: '',
        selCompany: '',
        description: '',
      }
    },
    methods: {
      ...mapMutations(['createDrugs']),
      submit() {
        // if (!this.medName || this.price || this.count || this.prodCompany || this.description) {
        //   alert('Please fill in the fields')
        // }
        // else {}
        this.createDrugs({
          id: this.id,
          medName: this.medName,
          price: this.price,
          count: this.count,
          prodCompany: this.prodCompany,
          description: this.description,
        })
        this.medName = this.price = this.count = this.description = ''
      },
    },

  }
</script>
<style>
  .myForm {
    position: relative;
    font-family: 'Segoe UI', Tahoma, sans-serif;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin: auto;
    border: 1px solid rgb(105, 130, 158);
    border-radius: 2px;
    margin-bottom: 10px;
  }

  .centered {
    position: absolute;
    width: 50%;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img {
    width: 100%;
    height: max-content;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 70%;
  }
</style>