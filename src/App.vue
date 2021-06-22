<template>
	<div id="app">
		<b-overlay :show="loading" rounded="sm">
			<b-container class="vh-100" fluid>
				<Login v-if="!isLogged"></Login>
				<Home v-else></Home>  
				<router-view/>
			</b-container>
		</b-overlay>
	</div>
</template>

<script>
	import Home from '@/components/Home/Home';
	import Login from '@/components/Login/Login';
	import {mapState} from 'vuex';

	export default {
		components: {
			Home, Login
		},
		computed:{
			...mapState('auth', ['isLogged']),
			...mapState(['loading'])
		}
	}
</script>