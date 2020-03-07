import { ADD_PLAYER } from '../actions/playerActions';
import { REMOVE_PLAYER } from '../actions/playerActions';

const playerReducer = (state = { players: []}, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return {...state, players:  [ ...state.players, action.payload] };
        case REMOVE_PLAYER:
            return {...state, players: state.players.filter((value, index) => index !== action.payload) };
        default:
            return {...state};
    }
};
export default playerReducer;
