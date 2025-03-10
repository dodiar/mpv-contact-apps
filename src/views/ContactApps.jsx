import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import getAllContact from '../redux/action/getAllContact';

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
                        <div className="d-flex justify content center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading ...</span>
                            </div>
                        </div>
                        :
                        contacts.lenght === 0 ?
                        <div className="text-center m-2 p-4">Data Not Found</div>
                        :
                        contacts.map(contact=>{
                            return (
                                <div className="col-md-3 p-1">
                                    <div className="card shadow-sm radius">
                                        <div className="card-body">
                                            <h5>{contact.name}</h5>
                                            <p>{contact.email}</p>
                                            <p>{contact.phonenumber}</p>
                                            <p>Category: {contact.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}