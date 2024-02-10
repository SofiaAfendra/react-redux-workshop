import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

const App = () => (
  <UISetup>
    <Game />
  </UISetup>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
