<template>
    <div class="min-h-screen flex items-center justify-center"  @submit.prevent="authenticateUser">
        <form class="bg-white p-8 shadow-md rounded-md" >
            <h2 class="text-2xl mb-4">User Login</h2>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-semibold">Email</label>
                <input v-model="formData.email" type="email" id="email" name="email"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold">Password</label>
                <input v-model="formData.password" type="password" id="password" name="password"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div>
                <button type="submit"
                   
                    class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
            </div>
            <router-link to="/add"> 

                <div>
            <button type="submit"
           
                class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add</button>
        </div>
            </router-link>
        </form>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    name:'LoginUser',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        ...mapActions({auth:'authenticateUser'}),
        authenticateUser() {
            this.auth(this.formData)
            console.log('Authentication data:', this.formData);
        }
    }
};
</script>

<style scoped>/* Add any component-specific styles here */</style>
