import {useSelector} from "react-redux";
import {selectCharactersLoading} from "@/Redux/selectors.ts";

export const isDisabled = () => {
    const loading =  useSelector(selectCharactersLoading)
    return  loading === 'pending'
};



