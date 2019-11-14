import React from 'react';
import './App.css';
import Comentarios from './componentes/comentario/Comentarios';
import Previsao from './componentes/previsao/Previsao';
import Contador from './componentes/contador/Contador';
import cat1 from '/img/cat1.jpg';
import cat2 from '/img/cat2.jpg';




function App() {
  return (
    <div className="container">
     <Previsao
        data="01/06/2019"
        resumo="Nublado"
        // img={}
        temperatura={{
          max: 25,
          min: 18,
        }}
      />
        
     <Contador/>
     <Comentarios/>
    </div>   

  );
}

export default App;
