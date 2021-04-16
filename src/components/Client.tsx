import React, {useState} from 'react'

const Client  = ({client}:any) : JSX.Element => {

    return (
            <>
            
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={client.avatarUrl} alt=""/>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                            {client.firstName} {client.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                            {client.phone}
                            </div>
                        </div>
                        </div>
                    </td>
        </>
    )
}

export default Client
