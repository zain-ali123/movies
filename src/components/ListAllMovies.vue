<template>
    <p>heyy</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <!-- Loop through the list of movies -->
        <div v-for="movie in movies" :key="movie" class="bg-white shadow-md rounded-md overflow-hidden">
            <img src="" alt="Movie Cover" class="w-full h-56 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold">{{ movie.name }}</h2>
                <p class="text-gray-600">Released on {{ movie.released_on }}</p>
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
            
        }
    },
    methods: {
        ...mapActions({allMovies:'fetchMovies'})
    },
    computed: {
        ...mapGetters({movies:'getMovieList'})
    },
    mounted() {
        this.allMovies()
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
