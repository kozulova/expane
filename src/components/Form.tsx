import React from "react";
import { useState, useEffect } from "react";
import {addNewClient, updateClient} from '../utils/addClient'
import {useMutation} from 'react-query';

const Form = ({setShow, client}: any) => {

    const {mutate} : any = useMutation(addNewClient);

    const update = useMutation(updateClient);

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if(client!==null){
            setFirst_name(client.firstName);
            setLast_name(client.lastName);
            setPhone(client.phone);
            setAvatar(client.avatarUrl);  
        }

    }, [client])

    const addClient = (event: any)=>{
        event.preventDefault();

        const newClient = {
            firstName: first_name,
            lastName: last_name,
            phone: phone,
            avatarUrl: avatar
        }

        if(client){
            update.mutate({id: client.id, ...newClient});
        } 
        else{
            mutate(newClient);
        }    

        setFirst_name('');
        setLast_name('');
        setAvatar('');
        setPhone('');
        setShow(false);
    }

    const cancelForm = (event: any)=>{
        event.preventDefault();
        setShow(false);
        setFirst_name('');
        setLast_name('');
        setAvatar('');
        setPhone('');
    }

  return (
    <div className="modal-content">
      <form>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  value={first_name}
                  onChange={(event)=>setFirst_name(event.target.value)}
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                    value={last_name}
                    onChange={(event)=>setLast_name(event.target.value)}
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                value={phone}
                onChange={(event)=>setPhone(event.target.value)}
                type="text" name="ohone" id="phone"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                <input 
                value={avatar}
                onChange={(event)=>setAvatar(event.target.value)}
                type="text" name="avatar" id="avatar" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                  <button
                    onClick={addClient}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                  <button
                  onClick={cancelForm}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md"
                  >
                    Cancel
                  </button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
