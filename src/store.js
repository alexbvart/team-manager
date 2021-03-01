import {createStore} from 'redux';
import faker from 'faker';

const playersCollection = (size) => {

    let playersCollection = []

    for (let index = 0; index < size; index++) {
        let element = {
            uuid: faker.random.uuid(),
            urlImage: faker.image.imageUrl(128,128,"people",true),
            name: faker.name.findName()
        };
        playersCollection = [...playersCollection,element]
    }
    return playersCollection;

}
const toPlayersToCollection = playersCollection(12);
console.log(toPlayersToCollection);





const initialState = {
    players: toPlayersToCollection,
    starters:[],
    substitutes: []
}


const reducerTrainer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_STARTER":
            console.log("__ADD_STARTER__", action.playerSelected);
            return{
                ...state,
                starters: state.starters.concat(action.playerSelected),
                players: state.players.filter(theBench => theBench.uuid !== action.playerSelected.uuid)
            }
        case "ADD_SUBSTITUES":
            console.log("__ADD_SUBSTITUES__", action.playerSelected);
            return{
                ...state,
                substitutes: state.substitutes.concat(action.playerSelected),
                players: state.players.filter(theBench => theBench.uuid !== action.playerSelected.uuid)
            }
        case "BACK_TO_THE_BENCH":
            console.log("__BACK_TO_THE_BENCH__", action.playerSelected);
            return{
                ...state,
                starters:    state.starters.filter(starter => starter.uuid !== action.playerSelected.uuid),
                substitutes: state.substitutes.filter(substitute => substitute.uuid !== action.playerSelected.uuid), 
                players: state.players.concat(action.playerSelected)
            }
    
        default:
            break;
    }

    return state;
}


export default createStore(reducerTrainer);



