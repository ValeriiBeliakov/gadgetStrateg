import { TypedUseSelectorHook, useDispatch ,useSelector} from "react-redux";
import  {AppDispatch, RootState } from "../redux/store"

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;