<template>
      <b-row class="h-100" align-v="center">
         <b-col md="4" offset-md="4">
            <b-alert
               :show="dismissCountDown"
               dismissible
               fade
               variant="warning"
               @dismiss-count-down="countDownChanged"
            >
               {{ mensajeAlerta }}
            </b-alert>
            <b-form @submit="onSubmit">
               <b-form-group
                  id="form-rut-group"
                  label="Usuario:"
                  label-for="form-rut"
               >
                  <b-form-input
                     id="form-rut"
                     v-model="form.rut"
                     @keyup="formatRut"
                     @change="validarRut"
                     type="text"
                     autocomplete="off"
                     placeholder="Ingrese su Rut"
                     required
                  ></b-form-input>
               </b-form-group>

               <b-form-group 
                  id="form-password-group" 
                  label="Contraseña:" 
                  label-for="form-password"
               >
                  <b-form-input
                     id="form-password"
                     v-model="form.password"
                     type="password"
                     placeholder="Ingrese su Contraseña"
                     required
                  ></b-form-input>
               </b-form-group>

               <b-button type="submit" variant="primary">Ingresar</b-button>
            </b-form>
         </b-col>
      </b-row>
</template>

<script>
   import {format, validate} from 'rut.js';
import { mapActions } from 'vuex';

   export default{
      data(){
         return{
            form:{
               rut: '',
               password: '',
               remember_me: 1
            },
            dismissCountDown: 0,
            mensajeAlerta: ''
         }
      },
      methods:{
         ...mapActions('auth', ['signIn']),
          async onSubmit(e){
            e.preventDefault()
            // validacion
            if(validate(this.form.rut)){
               
               this.form.rut = this.form.rut.replace(/[.]/g,'');

               //alert(JSON.stringify(this.form))
               await this.signIn(this.form);
               this.$router.push('/post');

            }else{
               this.mensajeAlerta = 'Rut ingresado es incorrecto';
               this.countDownChanged(2);
            }
         },
         formatRut(){
            if(this.form.rut === '')
               this.form.rut = ''
            else
               this.form.rut = format(this.form.rut);
         },
         validarRut(e){
            console.log(e);
            if(e != '' && !validate(this.form.rut)){
               this.mensajeAlerta = 'Rut ingresado es incorrecto';
               this.countDownChanged(2);
            }
         },
         countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
         },
      }
   }
</script>