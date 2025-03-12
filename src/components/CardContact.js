import React from "react";
import { Link } from "react-router-dom";

export default function CardContact(props) {
    return (
        <div className="card shadow-sm radius">
            <div className="card-body">
                <h5>{props.contact.name}</h5>
                <p>{props.contact.email}</p>
                <p>{props.contact.phonenumber}</p>
                <p>Category: {props.contact.category}</p>
            </div>
            {
                props.fromDetail ?
                ""
                :
                <div className="card-footer">
                    <Link to={`/detail/${props.contact.id}`}>
                        <button className="btn btn-dark">detail</button>
                    </Link>
                </div>
            }
        </div>
    );
}