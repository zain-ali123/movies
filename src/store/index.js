import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    movies: {
      movieList: [],
      selectedMovie: null,
      token:null
    },
    users: {
    },
  },
  getters: {
    getMovieList(state) {
      return state.movies.movieList;
    },
    getSelectedMovie(state) {
      return state.movies.selectedMovie;
    },
  },
  mutations: {
    SET_MOVIE_LIST(state, payload) {
      state.movies.movieList = payload;
    },
    SET_SELECTED_MOVIE(state, payload) {
      state.movies.selectedMovie = payload;
    },
  },
  actions: {
    // async createMovies(_,payload){
    //   try {
    //       console.log('payload in createMovies action ',payload)
    //       const {data} = await axios.post('http://localhost:3001/movies',payload)
    //     }
    //     catch(error){
    //     }
    // },
     async createMovies(_, payload) {
      try {
        const token = this.state.token;
        console.log('token---->', token)
        const config = {
          headers: {
            'x-access-token': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.post('http://localhost:3001/movies', payload, config);
        console.log('Movie created:', data);
      } catch (error) {
        console.error('Error creating movie:', error);
      }
    },
    // async fetchMovies({ commit }) {
    //   try {
    //     const token = this.state.token;
    //     console.log('token----> in fetchMoives', token)
    //     const config = {
    //       headers: {
    //         'x-access-token': `Bearer ${token}`,
    //         'Content-Type': 'application/json'
    //       }
    //     };
    //     const { data } = await axios.post('http://localhost:3001/movies',  config)
    //     console.log('response in action fechMovies : ',data)
    //     commit('SET_MOVIE_LIST', data);
    //   } catch (error) {
    //     console.error('Error fetching movies:', error);
    //   }
    // },
       async fetchMovies({ commit }) {
      try {
        const token = this.state.token;
        console.log('token in the fetch----> ', token)
        const config = {
          headers: {
            'x-access-token': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.get('http://localhost:3001/movies',config);
        console.log( data)
        commit('SET_MOVIE_LIST', data.data.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async registerUser(_, payload) {
      try {
        console.log('payload in vuex ',payload)
        const { data } = await axios.post('http://localhost:3001/users/register', payload);
        console.log(data);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    },
    async authenticateUser(_, payload) {
      try {
        const { data } = await axios.post('http://localhost:3001/users/authenticate', payload);
        // console.log('data is action : ',data.data.token)
        this.state.token=data.data.token
        console.log('Data in action >>>>',data);
        // console.log(this.state.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        console.log(axios.defaults.headers)
        
      } catch (error) {
        console.error('Error authenticating user:', error);
      }
    },
  },
  modules: {},
});