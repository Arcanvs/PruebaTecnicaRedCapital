import Vue from 'vue';

export async function signIn( context, user ){
    try{
        context.commit('setLoading', true, {root: true});
        // comente la petición por que me bloqueo el servidor :(
        // await Vue.axios
        //     .post('https://crm.redcapital.cl/api/login',user)
        //     .then(response => {
        //         if(response.data.status === 200){
        //             user = response.data.data.usuario
        //         }
        //     })
        user = {
            nombre: 'Usuario de Prueba'
        }
        context.commit('auth/setUser', user, {root: true});
    } catch (e) {
        context.commit('auth/authError', 'Error en el Servidor');
    } finally{
        context.commit('setLoading', false, {root: true});
    }

} 