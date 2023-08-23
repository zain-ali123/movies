<template>
    <div class="min-h-screen flex items-center justify-center">
        <form class="bg-white p-8 shadow-md rounded-md" @submit.prevent="addMovie">
            <h2 class="text-2xl mb-4">Add a Movie</h2>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-semibold">Name</label>
                <input v-model="formData.name" type="text" id="name" name="name"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div class="mb-4">
                <label for="released_on" class="block text-gray-700 font-semibold">Released On</label>
                <input v-model="formData.released_on" type="date" id="released_on" name="released_on"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div>
                <button type="submit"
                    class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add
                    Movie</button>
            </div>
            <router-link to="/all">

                <div class="mt-2">
            <button type="submit"
                class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">All
                Movies</button>
        </div>
            </router-link>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'AddMovies',
    data() {
        return {
            formData: {
                name: '',
                released_on: ''
            }
        };
    },
    methods: {
        ...mapActions({add:'createMovies'}),
        addMovie() {
            this.add(this.formData)
            console.log('Movie data:', this.formData);
        }
    }
};
</script>

<style scoped>/* Add any component-specific styles here */</style>
