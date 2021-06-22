export function setPostDetalle (state, postDetalle) {
    state.posteos = '';
    state.error = false;
    state.errorMessage = '';
    state.postDetalle = postDetalle;
}

export function setPosts (state, posts) {
    state.posteos = posts;
    state.error = false;
    state.errorMessage = '';
    state.postDetalle = '';
}

export function postError (state, error){
    state.posteos = null;
    state.error = true;
    state.errorMessage = error;
    state.postDetalle = '';
}