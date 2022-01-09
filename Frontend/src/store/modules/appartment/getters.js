export default {
    appartments(state){
        return state.appartments;
    },
    hasAppartments(state){
        return state.appartments && state.appartemnts.length > 0;
    }
};