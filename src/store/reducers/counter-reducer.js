import {
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT, 
    COUNTER_RESET
} from './../actions/counter-action';

// Définir l'etat initial
const initialState = {
    count: 0,
    msg: 'Initial'
};

// Création de la méthode "reducer" qui peut résoudre les actions
// -> Méthode d'accumulation avec le state et l'action
export const counterReducer = (state = initialState, action) => {
    // Définition d'un switch avec la résolution des actions
    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,   // Permet de ne jamais perde de valeur de state
                count: state.count + action.payload,
                msg: 'Incrementation'
            };
        case COUNTER_DECREMENT: 
            return {
                ...state,
                count: state.count - action.payload,
                msg: 'Decrementation'
            }
        case COUNTER_RESET : 
            return {
                ...state,
                count: 0, // ou "initialState.count" ;)
                msg: 'Reset'
            }

            // Alternative => Remettre l'objet initial en tant de State
            // return initialState;
            
        default : 
            return state;   // TOUJOURS renvoyer le state dans le default !
    }
}