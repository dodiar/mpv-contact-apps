import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

// action
import getAllContact from '../redux/action/getAllContact';

// components
import CardContact from "../components/CardContact";

export default function ContactApps() {
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.loadingReducer.loading);
    const contacts = useSelector(state=>state.contactReducer.allContact);

    useEffect(() => {
        dispatch(getAllContact())
    }, []);
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    {
                        loading ?
                        <Loading />
                        :
                        contacts.lenght === 0 ?
                        <div className="text-center m-2 p-4">Data Not Found</div>
                        :
                        contacts.map(contact=>{
                            return (
                                <div key={contact.id} className="col-md-3 p-1">
                                    <CardContact contact={contact} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}