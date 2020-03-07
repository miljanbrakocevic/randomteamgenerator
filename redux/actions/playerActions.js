export const ADD_PLAYER = "ADD_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

//Action Creator
export const addPlayer = (payload) => ({
    type: ADD_PLAYER,
    payload
});

export const removePlayer = (payload) => ({
    type: REMOVE_PLAYER,
    payload
});