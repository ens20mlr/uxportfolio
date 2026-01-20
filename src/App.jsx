import { BrowserRouter as Router } from 'react-router-dom';
import RootRoutes from './routes/RootRoutes';
import './styles/main.scss';
import MobileGuard from './components/MobileGuard/MobileGuard';

const App = () => {
  return (
    <Router>
     <MobileGuard>
        <RootRoutes />
      </MobileGuard>
    </Router>
  );
};

export default App;
