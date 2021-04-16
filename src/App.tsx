import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Clients from './components/Clients';
import Form from './components/Form';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
         
    <Clients/>
    </div>

    </QueryClientProvider>
  );
}

export default App;
