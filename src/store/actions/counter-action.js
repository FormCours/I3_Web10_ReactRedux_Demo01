// Création des constantes pour les actions possibles
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET =     'counter/reset';

// Création de méthode pour générer les objet "action"
// - Fonction  "increment" avec la valeur a augementer
export const increment = function(step) {
    // Envoyer un objet avec l'action
    return {
        type: COUNTER_INCREMENT,    // Le type d'action
        payload: step               // Les données qui accompagne l'action
    };
};

// - Fonction fléchée "decrement" avec la valeur a diminuer
export const decrement = (step) => {
    // Envoyer un objet avec l'action
    return {
        type: COUNTER_DECREMENT,    // Le type d'action
        payload: step               // Les données qui accompagne l'action
    };
};

// - Fonction lambda "reset" qui renvoi directement l'objet avec l'action
export const reset = () => ({
    type: COUNTER_RESET
});