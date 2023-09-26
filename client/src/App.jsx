// Import necessary dependencies
import { Outlet } from 'react-router-dom';

// ... (other imports)

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          {/* Render the BikeList component within a route */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
