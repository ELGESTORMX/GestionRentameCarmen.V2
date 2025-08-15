import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routes/router';
import { ApiProvider } from './utils/ApiContext';

function App() {
  return (
    <ApiProvider>
      <Router>
        <RouterComponent />
      </Router>
    </ApiProvider>
  );
}

export default App;