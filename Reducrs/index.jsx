import reducer from "./Reducer";
import { CombinedState, combineReducers} from "redux";

const rootReducer = combineReducers({
    reducer:reducer,
})

export default rootReducer