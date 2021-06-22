<template>
    <b-nav tabs justified>
        <b-nav-item exact to="/post">Posteo</b-nav-item>
        <b-nav-item @click="_logout">Salir</b-nav-item>
    </b-nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations('auth', ['logout']),
        _logout(){
            this.logout();
            this.$router.push('/login');
        }
    }
}
</script>
