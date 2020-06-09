import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';

import Card from './components/Card';
import NavBar from './components/NavBar';
import Table from './components/Table';
import Line from './components/Line';

function App() {
  const animais = [
    {
      nome: 'Scar',
      idade: '7',
      genero: 'Masculino',
      foto: 'https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg'
    },
    {
      nome: 'Leãozinho',
      idade: '6',
      genero: 'Masculino',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoQNqfXKibDbCa1OKM2ixo0mfkXC5omNXHv-iBYaGlMCcPMNOq&usqp=CAU'
    },
    {
      nome: 'Tigrinho',
      idade: '8',
      genero: 'Masculino',
      foto: 'https://www.universodegatos.com/wp-content/themes/yootheme/cache/por-que-os-gatos-laranja-geralmente-sao-do-sexo-masculino-f2c9376d.jpeg'
    },
    {
      nome: 'Pantera',
      idade: '5',
      genero: 'Feminino',
      foto: 'https://cachorrosincriveis.com.br/wp-content/uploads/2018/07/pinscher-10-696x464.jpg'
    },
    {
      nome: 'Kiara',
      idade: '3',
      genero: 'Feminino',
      foto: 'https://fofuxo.com.br/_upload/galleries/2013/03/29/dalmata-5155dc326b272.jpg'
    },
  ];
  const donos = [
    {
      nome:'Daniele',
      genero:'Feminino',
      idade:'30'
    },
    {
      nome:'Yuri',
      genero:'Masculino',
      idade:'28'
    },
    {
      nome:'Andre',
      genero:'Masculino',
      idade:'50'
    },
  ]
  return (
    <div>
        <NavBar />
        <main>
            <div className="container">
                <h2>Bixinhos</h2>
                <div className="row">
                    
                      {/* Estou iterando a lista de usuários e pra cada um dele estou renderizando o componente card e passando como prop o próprio usuário, esse atributo key é utilizado porque quando se usa o map no react, cada componente precisa de um identificador, nesse caso eu passei o nome do usuário, porém é mais comum utilizar o id */}
                      {animais.map((ani) => (
                        <div className="col s2">
                        <Card data={ani} key={ani.nome} />
                        </div>
                      ))}
                    
                </div>
                <h2>Pessoas</h2>
                <div className="row">
                    <Table>
                    {donos.map((dono) => (
                      <Line nome={dono.nome} genero={dono.genero} idade={dono.idade} />
                     ))}
                    </Table>
                </div>
            </div>
        </main>
        {/* Conteúdo do wireframe */}
    </div>
  );
}

export default App;
