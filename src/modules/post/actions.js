import Vue from 'vue';

export async function getPost( context ){
    try{
        context.commit('setLoading', true, {root: true});
        await Vue.axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posteos = []; 
                response.data.map((obj) => {
                    obj.status = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
                    obj.amount = Math.floor(Math.random() * 15000000);
                    if(obj.status != 0){
                        posteos.push(obj);
                    }
                });
                context.commit('posts/setPosts', posteos, {root: true});
            });
    } catch (e) {
        context.commit('posts/postError', 'Error en el Servidor.', {root: true});
    } finally{
        context.commit('setLoading', false, {root: true});
    }
} 

export async function getPostDetalle( context, id ){
    try{
        context.commit('setLoading', true, {root: true});
        await Vue.axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                context.commit('posts/setPostDetalle', response.data, {root: true});
            });
    } catch (e) {
        context.commit('posts/postError', 'Error en el Servidor', {root: true});
    } finally{
        context.commit('setLoading', false, {root: true});
    }

} 