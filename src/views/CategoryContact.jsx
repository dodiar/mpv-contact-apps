import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryContact() {
    const dispatch= useDispatch();

    const loading = useSelector(state=>state.loadingReducer.loading);

    useEffect(() => {
        dispatch({type:"LOADING", payload:true});
        setTimeout(() => {
            dispatch({type:"LOADING", payload:false})
        }, 2000);
    }, []);

    return (
        <>
            {
                loading ?
                <p>Loading...</p>
                :
                <p>Category Contact</p>
            }
        </>
        
    );
}