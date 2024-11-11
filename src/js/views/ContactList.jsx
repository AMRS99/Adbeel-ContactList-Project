import React, {useContext}from "react";
import Contact from "./Contact.jsx";

import { Context } from "../store/appContext.js";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    return(
        <>
           <ul>
                {store.contacts.map(contact => {
                    return(
                        <li className="d-flex bg-light justify-content-between border border-dark" key={contact.id}>
                            <Contact 
                                id={contact.id}
                                name={contact.name}
                                phone={contact.phone}
                                email={contact.email}
                                address={contact.address}
                            />
                         </li>                       
                    )
                })}
           </ul>
        </>
    );
}

export default ContactList;