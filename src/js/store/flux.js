const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[]
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
			getContact: () =>{
				fetch("https://playground.4geeks.com/contact/agendas/Adbeel/contacts")
				.then(response =>{
					if(!response.ok)
						throw new Error("Error trying to get info")
					else{
						return response.json();
					}
				})
				.then(data =>{
					console.log(data.contacts);
					setStore({contacts: data.contacts})
				})
				.catch(error=>{"Error:", error})
			},
			deleteContact: (contactId) => {
				fetch(`https://playground.4geeks.com/contact/agendas/Adbeel/contacts/${contactId}`,{
					method:"DELETE"
				})
				.then(response =>{
					if(response.status !== 204){
						console.log("Error! Contact not found!")
						throw new Error (response.statusText);
					}
					console.log("Deletion successful");
					getActions().getContact();
				})
				.catch(error => console.log(error))
			},
			PostContact: (name ,email, phone, address) => {

				let contact ={
					name: name,
					phone: phone,
					email: email,
					address: address
				}

				let options = {
					method: 'POST',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				fetch("https://playground.4geeks.com/contact/agendas/Adbeel/contacts" ,options)
				.then(response =>{
					if(!response.ok)
						throw new Error(response.statusText);
					console.log("Contact successfully added!!!")
					getActions().getContact();
					return response.json();
				})
				.catch(error => console.log(error))
			},
			PutContact:(name ,email, phone, address, id) =>{
				let contact ={
					name: name,
					phone: phone,
					email: email,
					address: address
				}

				let options = {
					method: 'PUT',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				console.log(id);
				fetch(`https://playground.4geeks.com/contact/agendas/Adbeel/contacts/${id}` ,options)
				.then(response =>{
					if(!response.ok)
						throw new Error(response.statusText);
					console.log("Contact successfully edited!!!")
					getActions().getContact();
					return response.json();
				})
				.then(data =>{
					const updatedContact = store.contacts.map(contact => {
						if (contact.id == id) {
							contact = data
						}
						return contact
					})
					setStore({ contacts: updatedContact })
				})
				.catch(error => console.log(error))
			}
		}
	};
};

export default getState;
