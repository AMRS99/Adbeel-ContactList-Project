import React, { useState, useContext  }from "react";

import { Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

const EditContact = () => {

    const { store, actions } = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { id } = useParams();
    return(
        <>
            <div className="row">
                <div className="col-2"></div>

                <div className="col-8">
                    <div className="header d-flex justify-content-center">
                        <h1>Edit Contact</h1>
                    </div>
                    <section>
                        <div className="name-input">
                            <label htmlFor="name">Full Name</label>

                            <div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your full name" 
                                    required 
                                    minLength="4" 
                                    maxLength="30" 
                                    size="115" 
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                        </div>

                        <div className="email-input">
                            <label htmlFor="email">Email</label>

                            <div>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your email" 
                                    required 
                                    minLength="4" 
                                    maxLength="20" 
                                    size="115"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} 
                                />
                            </div>
                        </div>

                        <div className="phone-input">
                            <label htmlFor="phone">Phone</label>

                            <div>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Your phone" 
                                    required 
                                    minLength="4" 
                                    maxLength="12" 
                                    size="115"
                                    onChange={e => setPhone(e.target.value)}
                                    value={phone} 
                                />
                            </div>
                        </div>

                        <div className="address-input">
                            <label htmlFor="addres">Address</label>

                            <div>
                                <input 
                                    type="text"
                                    id="address" 
                                    name="address" 
                                    placeholder="Your address" 
                                    required 
                                    minLength="4" 
                                    maxLength="50" 
                                    size="115"
                                    onChange={e => setAddress(e.target.value)}
                                    value={address} 
                                />
                            </div>
                        </div>
                    </section>
                    <div className="d-flex">
                        <button type="button" className="btn btn-primary flex-grow-1" onClick={() => {actions.PutContact(name,email,phone,address,id)}}>Save Edit</button>
                    </div>

                    <div>
                        <Link to="/">
                            <span>Get back to Contact List</span>
                        </Link>
                    </div>
                </div>

                <div className="col-2"></div>
            </div>
        </>
    )
}

export default EditContact;