import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import SongsView from '@/views/songs/SongsView.vue'
import CreateSongView from '@/views/songs/CreateSongView.vue'
import SongView from '@/views/songs/SongView.vue'
import EditSongView from '@/views/songs/EditSongView.vue'
import SongsBookmark from '@/views/songs/SongsBookmark.vue'
import LearnMoreView from '@/views/LearnMoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/songs', name: 'songs', component: SongsView },
    { path: '/song/create', name: 'createSong', component: CreateSongView },
    { path: '/songs/:id', name: 'viewSong', component: SongView }, // Fixed: removed :song
    { path: '/songs/:id/edit', name: 'editSong', component: EditSongView }, // Fixed: use :id consistently
    { path: '/bookmarks', name: 'bookmark', component: SongsBookmark },
    { path: '/learnmore', name: 'learnmore', component: LearnMoreView },
  ],
})

export default router
