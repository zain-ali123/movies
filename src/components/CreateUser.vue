<template>
  <div class="min-h-screen flex items-center justify-center">
    <form class="bg-white p-8 shadow-md rounded-md" @submit.prevent="registerUser">
      <h2 class="text-2xl mb-4">User Registration</h2>
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold">Name</label>
        <input v-model="formData.name" type="text" id="name" name="name" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold">Password</label>
        <input v-model="formData.password" type="password" id="password" name="password" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
      </div>
      <div v-if="msgArray">
        <div v-for="(item,index) in msgArray" :key="index"  class="text-red-500"><p> {{ item.msg }}</p></div>


      </div>
        <div v-if="msg" >
            <div  class="text-green-500"><p> {{ msg }}</p></div>


          </div>

      
      <div>
        <button type="submit" class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Register</button>
      </div>

          
            <router-link to="/"> 
                <div v-if="msg" class="mt-2">
    
                    <button type="submit" class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
                </div>

            </router-link>
          
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from '@/store'
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
        },
        msgArray: null,
        msg: null,
        

    };
  },
    methods: {
        
    ...mapActions({register:'registerUser'}),
   async registerUser() {
       await this.register(this.formData)
    //    console.log(store.state.Messsage)
       if (Array.isArray(store.state.Messsage)) {
            console.log('In if block')
           this.msgArray = store.state.Messsage
           console.log('message aray:',this.msgArray)
           this.msg=null
           
       }
       else {
           this.msg = store.state.Messsage
            this.msgArray=null
        }
    //     console.log('store.Message by click of button  : ', store.state.Messsage)
    //     console.log('msg by click of button  : ',this.msg)
    //   console.log('Registration data:', this.formData);
    }
    },
    computed: {
    // ...mapState({msg:'Message'})
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
