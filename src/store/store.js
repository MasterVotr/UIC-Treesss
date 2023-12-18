import { createStore } from 'vuex'

export default createStore({
    state: {
        id: '',
        location: '',
        owner: '',
        type: '',
        age: '',
        motivation: '',
        divIsOpen: false,
    },
    getters: {
        getId(state) {
            return state.id;
        },
        getLocation(state) {
            return state.location;
        },
        getOwner(state) {
            return state.owner;
        },
        getType(state) {
            return state.type;
        },
        getAge(state) {
            return state.age;
        },
        getMotivation(state) {
            return state.motivation;
        },
        getDivState(state) {
            return state.divIsOpen;
        }
    },
    mutations : {
        updateId(state, id){
            state.id = id;
        },
        updateLocation(state, location) {
            state.location = location;
        },
        updateOwner(state, owner) {
            state.owner = owner;
        },
        updateType(state, type) {
            state.type = type;
        },
        updateAge(state, age) {
            state.age = age;
        },
        updateMotivation(state, motivation) {
            state.motivation = motivation;
        },
        updateDivState(state, divIsOpen) {
            state.divIsOpen = divIsOpen;
        }
    }
})