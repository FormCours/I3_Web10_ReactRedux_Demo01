import { useDispatch } from "react-redux";
import { reset } from "../../store/actions/counter-action";

const CounterReset = () => {
    
    // Recuperation de la méthode pour interagir avec le dispatcher 
    const dispatch = useDispatch();

    const handleReset = () => {
        
        // Envoie de l'objet d'action "reset"
        dispatch(reset());
    }

    return (
        <button onClick={handleReset}>
            Reset
        </button>
    );
};

export default CounterReset;