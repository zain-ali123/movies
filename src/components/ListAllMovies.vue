<template>
    <p>heyy</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <!-- Loop through the list of movies -->
        <div v-for="(movie,index) in movies" :key="index" class="bg-white shadow-md rounded-md overflow-hidden">
            <img src="" alt="Movie Cover" class="w-full h-56 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold">{{ movie.name }}</h2>
                <p class="text-gray-600">Released on {{ movie.released_on }}</p>
                <p> id:{{ movie.id }}</p>
            </div>
            <button @click="sendUpdate(index, movie.id)" >Edit</button>
            <button @click="deleteMovie(index, movie.id)">Del</button>
        </div>
    </div>
    <div
            v-if="showPopup"
            class="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900"
          >
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold mb-4">Popup</h2>
              <div class="mb-3">
                <label class="block mb-1 font-medium">Name</label>
                <input
                  v-model="newData.name"
                  class="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div class="mb-3">
                <label class="block mb-1 font-medium">released_on</label>
                <input
                    type="date"
                  v-model="newData.released_on"
                  class="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div class="flex justify-end">
                <button @click="closePopup">Save Changes</button>
              </div>
            </div>
          </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
export default {
    name: 'ListAllMovies',
    data() {
        return {
            showPopup: false,
            newData: {
                name:null ,
                released_on: null,
            },
            idObj:null
        }
    },
    methods: {
        ...mapActions({ allMovies: 'fetchMovies' }),
        ...mapActions({ update: 'updateMovies' }),
        ...mapActions({delete:'deleteMovie'}),
        sendUpdate(index, id) {
            this.idObj = { 'index': index, 'id': id }

            this.newData.name=  this.movies[index].name;
            this.newData.released_on= this.movies[index].released_on;


            this.showPopup = true;


        },
        closePopup() {
            this.update({ obj: this.idObj, payload: this.newData });
            this.showPopup = false;
        },
        deleteMovie(index, id) {
            console.log("id to be del:  ", id);
            const obj = { index: index, id: id };
            this.delete(obj);
        }
    },
    computed: {
        ...mapGetters({ movies: 'getMovieList' }),
        
    },
    mounted() {
        this.allMovies()
    },
    updated() {
        
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
