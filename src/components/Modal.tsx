import React from 'react'
import Form from './Form'

const Modal = ({setShow, client}: any) => {
    return (
        <div className="modal">
            <Form setShow={setShow} client={client}/>
        </div>
    )
}

export default Modal
