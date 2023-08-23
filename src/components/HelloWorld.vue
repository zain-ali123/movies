<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <router-link to="/add">
        <div class="mt-2">
          <button
            type="submit"
            class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Add to moives
          </button>
        </div>
      </router-link>
            <router-link to="/all">
            <div  class="mt-2">
              <button
                type="submit"
                class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
              Go To  Movies
              </button>
            </div>
          </router-link>
          
          <router-link to="/changePassword">
              <div  class="mt-2">
                <button
                  type="submit"
                  class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                Change Password
                </button>
              </div>
            </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
