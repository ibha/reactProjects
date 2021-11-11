import './App.css';
import HomeComponent from './HomeComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomeComponent></HomeComponent>
      </div>
    </Provider>
  );
}

export default App;
