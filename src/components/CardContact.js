import React from "react";

export default function CardContact(props) {
    return (
        <div className="card shadow-sm radius">
            <div className="card-body">
                <h5>{props.contact.name}</h5>
                <p>{props.contact.email}</p>
                <p>{props.contact.phonenumber}</p>
                <p>Category: {props.contact.category}</p>
            </div>
        </div>
    );
}