import {
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT, 
    COUNTER_RESET
} from './../actions/counter-action';

// Définir l'etat initial
const initialState = {
    count: 0
};

// Création de la méthode "reducer" qui peut résoudre les actions
// -> Méthode d'accumulation avec le state et l'action
export const counterReducer = (state = initialState, action) => {
    // Définition d'un switch avec la résolution des actions
    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,   // Permet de ne jamais perde de valeur de state
                count: state.count + action.payload
            };
        case COUNTER_DECREMENT: 
            return {
                ...state,
                count: state.count - action.payload
            }
        case COUNTER_RESET : 
            return {
                ...state,
                count: 0 // ou "initialState.count" ;)
            }
        default : 
            return state;   // TOUJOURS renvoyer le state dans le default !
    }
}