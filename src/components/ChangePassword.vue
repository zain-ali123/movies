<template>
     <div
        class="min-h-screen flex items-center justify-center"
        @submit.prevent="ChangePassword"
      >
        <form class="bg-white p-8 shadow-md rounded-md">
          <h2 class="text-2xl mb-4">Change Password</h2>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-semibold"
              >New Password</label
            >
            <input
              v-model='password'
              type="password"
              id="password"
              name="password"
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          
        
            <button
              type="submit"
              class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Confirm
            </button>
          </div>
     
        </form>
      </div>
    
</template>

<script>
import { mapActions } from 'vuex';
import store from "@/store";
export default {
    name: 'ChangePassword',
    data() {
        return {
            password:null
        }
    },
    methods: {
        ...mapActions({ pass: 'updatePassword' }),
        ChangePassword() {
            const obj = { 'id': store.state.userId, 'password': this.password }
            console.log('obj as payload>>>>>>',obj)
            this.pass(obj)
        }
        
    }
}
</script>