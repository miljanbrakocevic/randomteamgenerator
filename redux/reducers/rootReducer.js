import playerReducer from './playerReducer';
import teamsReducer from './teamsReducer'
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    player: playerReducer,
    teams: teamsReducer
});

export default rootReducer;
