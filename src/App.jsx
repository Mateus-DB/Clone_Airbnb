import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar';
import Categorias from './components/Categorias';
import Card from './components/Card';

//importar modal de filtro
import ModalFilter from './components/ModalFilter';

import './App.css'
import Skeleton from './components/Skeleton';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [catID, setCatID] = useState(1);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);



  //REQUISIÇÃO DA API
  useEffect(() => {
    fetch('https://curso.programacaoweb.com.br/api-airbnb/')
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json()
        }
        throw new Error('Algo deu errado!')
      }).then((respostaJSON) => {
        setAllHouses(respostaJSON)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    // console.log(allHouses);
    filterId(catID)
  }, [allHouses]);

  useEffect(() => {
    // console.log(filterHouses);
  }, [filterHouses]);

  const changeCat = (id) => {
    setCatID(id)
    filterId(id)
  }

  //FILTRAR POR ID DA CATEGORIA
  const filterId = (id) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria === id;
    })
    setFilterHouses(novaLista)
  }

  //FILTRAR POR PREÇO
  const filterByPrice = (catID, min, max) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria === catID
        && item.preco >= min
        && item.preco <= max
    })
    setFilterHouses(novaLista)
  }

  //RESETAR TODOS OS FILTROS 
  const resetFilter = (id) => {
    filterId(id);
  }

  return (
    <div>
      <Navbar />
      <Categorias changeCat={changeCat} />
      {
        isLoading ?
          <div className='mt-3 container-airbnb row' style={{ paddingTop: '180px' }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          : <Card dados={filterHouses} />
      }

      <ModalFilter resetFilter={resetFilter} catID={catID} filterByPrice={filterByPrice} items={filterHouses} />
    </div>
  )
}

export default App
