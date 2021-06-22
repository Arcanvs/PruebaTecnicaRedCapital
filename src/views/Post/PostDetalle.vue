<template>
    <div class="h-100">
        <b-row class="h-100" align-v="center">
            <b-col md="6" offset-md="3">
                <b-card img-src="https://picsum.photos/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-title>
                        {{postDetalle.title}}
                    </b-card-title>
                    <b-card-text>
                        {{postDetalle.body}}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default{
        methods: {
            ...mapActions('posts', ['getPostDetalle']),
            async getDetalle(){
                await this.getPostDetalle(this.$route.params.id);
            }
        },
        mounted(){
            this.getDetalle()
        },
        computed:{
            ...mapState('posts', ['postDetalle']),
        }
        
    }
</script>