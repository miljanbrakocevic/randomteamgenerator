export const UPDATE_NUMBER_OF_TEAMS = "UPDATE_NUMBER_OF_TEAMS";
export const SET_SELECTED_TEAMS = "SET_SELECTED_TEAMS";

//Action Creator
export const updateNumberOfTeams = (payload) => ({
    type: UPDATE_NUMBER_OF_TEAMS,
    payload
});

export const setSelectedTeams = (payload) => ({
    type: SET_SELECTED_TEAMS,
    payload
});