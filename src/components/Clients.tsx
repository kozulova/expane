import React, {useState} from "react";
import useClients from "../hooks/useClients";
import Client from "./Client";
import Modal from "./Modal";


type clientsQuery = {
  status: any;
  data: any;
  error: any;
  isFetching: any;
};

export default function Clients() {
  const { status, data, error, isFetching }: clientsQuery = useClients();

  const [show, setShow] = useState(false);

  const [currentClient, setCurrentClient] = useState(null);

  const showModal = () => {
    setShow(true);
    console.log("showModal")
  }

  const editClient = (event: any, client:any) => {
    event.preventDefault();
    setCurrentClient(client);
    showModal();
}

const addNewCliet = () => {
    setShow(true)
    setCurrentClient(null);
}

  return (
    <div>
        {show&&<Modal setShow={setShow} client={currentClient}/>}
        <h1>Clients</h1>
        {show || (<button
        onClick={addNewCliet}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add new CLient
        </button>)}
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data.getClients.map((client: any) => (
                        <tr key={client.id}>
                          <Client client={client} showModal={showModal}/>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={(event)=>editClient(event, client)}>Edit</a>
                    </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}
