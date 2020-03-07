import { UPDATE_NUMBER_OF_TEAMS, SET_SELECTED_TEAMS } from '../actions/teamsActions';

const teamsReducer =
    (state = { numberOfTeams: 2, selectedTeams: [] }, action) => {
    switch (action.type) {
        case UPDATE_NUMBER_OF_TEAMS:
            return {...state, numberOfTeams: parseInt(action.payload)};
        case SET_SELECTED_TEAMS:
            return {...state, selectedTeams: action.payload}
        default:
            return {...state};
    }
};
export default teamsReducer;
