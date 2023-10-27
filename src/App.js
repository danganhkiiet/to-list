import './App.css';
import Index from './Home';
import store from './store';
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>

    </>
  );
}

export default App;