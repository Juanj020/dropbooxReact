import './App.css';
import Nav from './Componentes/header/encabezado';
import Contenido from './Componentes/contenido-central/contenido';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav></Nav>
            </header>
            <Contenido></Contenido>
        </div>
    );
}

export default App;
