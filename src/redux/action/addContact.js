import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const addContact = (({user}) => {
    return function(dispatch) {
        axios({
            url: "http://localhost:3001/contacts",
            method: "post",
            data: {
                name: user.name,
                email: user.email,
                phonenumber: user.phone,
                category: user.category
            }
        })
        .then((response) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                timer: 3000,
                showConfirmButton: true,
                title: `Success add contact ${response.data.name}`
            })
            dispatch(getAllContact());
        }).catch((err) => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
                title: `${err.message} - ${err.status}`
            })
        });
    }
});

export default addContact;