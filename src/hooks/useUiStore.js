import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
    
    const dispatch = useDispatch()
    const { isDateModalOpen } = useSelector(state => state.ui); 

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }; 

    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    };

    //Si deseo manejar un toggle 

    const toggleDateModal = () => {
        (isDateModalOpen) 
        ? openDateModal()
        : closeDateModal
    }
    return {
        
        //Propiedades
        isDateModalOpen, 

        //Metodos
        openDateModal, 
        closeDateModal,
        toggleDateModal
    }
}