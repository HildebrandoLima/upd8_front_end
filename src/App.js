import Client from './pages/client/ClientPage';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div className="container">
      <div className="card mt-3 border border-dark">
        <img src={{logo}} className="mt-3 p-3" alt="Logo" />

        <Client />
      </div>
    </div>
  );
}

export default App;