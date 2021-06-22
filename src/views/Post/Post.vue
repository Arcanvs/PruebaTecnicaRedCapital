<template>
    <div>
        <b-row class="login__form" align-v="center">
            <b-col md="6">
                <h3>Listado de Post</h3>
            </b-col>
            <b-col md="6">
                <b-form-select
                    id="input-3"
                    v-model="filtro"
                    :options="opciones"
                    @change="selectFiltro"
                ></b-form-select>
            </b-col>
            <b-col md="3" v-for="post in posteosVfor" :key="post.id">
                <b-card
                    :title=post.title
                    img-src="https://picsum.photos/300/300"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                >
                    <b-card-text>
                        <strong>$ {{ new Intl.NumberFormat().format(post.amount) }}</strong>
                        <hr>
                        {{ post.body }}
                    </b-card-text>
                    <b-button class="w-100" @click="detallePost(post.id)" variant="primary">Ver</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default{
        data() {
            return {
                filtro: null,
                opciones: [{ text: 'Seleccione un Filtro', value: null }, { text: 'Todos Los Registros', value: 1 }, { text: 'Entre 1 a 5 millones', value: 2 } , { text: 'Entre 5 a 10 millones', value: 3 }],
                posteosVfor: [],
            }
        },
        methods: {
            ...mapActions('posts', ['getPost']),
            async getPosteos(){
                await this.getPost();
                this.posteosVfor = this.posteos;
            },
            selectFiltro(){
                switch (this.filtro) {
                    case 1:
                        this.posteosVfor = this.posteos;
                        break;
                    case 2:
                        this.posteosVfor = this.filtrado(1,5000000);
                        break;
                    case 3:
                        this.posteosVfor = this.filtrado(5000000,10000000);
                        break;
                    default:
                        break;
                }
            },
            filtrado(min, max){
                const postFiltrado = [];
                this.posteos.map((obj) => {
                    if(obj.amount >= min && obj.amount <= max){
                        postFiltrado.push(obj);
                    }
                });
                return postFiltrado;
            },
            detallePost(id){
                this.$router.push(`/post/${id}`);
            }
        },
        mounted(){
            this.getPosteos()
        },
        computed:{
            ...mapState('posts', ['posteos']),
        }
    }
</script>

<style>
    .card-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>