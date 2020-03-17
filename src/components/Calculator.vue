<template>
  <div>
    <h3>{{ msg }}</h3>
    <p>What's the sum of the two numbers?</p>
    <div class="inline">
      <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess"> <button v-on:click="check">Check Answer</button>
    </div>
    <button v-on:click="refresh">Refresh</button>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data() {
    return {
      x1: Math.ceil(Math.random() * 100), 
      x2: Math.ceil(Math.random() * 100),
      guess: "",
      message: ""
    }
  },
  methods: {
    check() {
      if (this.x1 + this.x2 === parseInt(this.guess)) {
        this.message = "SUCCESS!"
      } else {
        this.message = "TRY AGAIN"
      }
    },
    refresh() {
      this.x1 = Math.ceil(Math.random() * 100);
      this.x2 = Math.ceil(Math.random() * 100);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline * {
  display: inline-block;
}
</style>
