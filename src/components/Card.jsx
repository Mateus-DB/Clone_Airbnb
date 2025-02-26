import React from 'react'
//importar css do card
import './css/Card.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//importar dados dos cards
// import { acomodacoes } from '../../backend/dados';


function Card({ dados }) {

    //adicionar um número aleatório nos valores km e dias dos meses
    function getRandonInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function animar(e) {
        e.target.classList.toggle('animate');
    }

    if (dados.length == 0) {
        return (
            <div style={{ paddingTop: '180px' }} className='d-flex justify-content-center aligh-items-center'>
                <div className='container-airbnb row'>
                    <div className='col mt-5'>
                        <div className='card text-center'>
                            <div className="card-body">
                                Nenhuma acomodação encontrada para esta categoria <i className="bi bi-emoji-frown ps-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div style={{ paddingBottom: '60px', paddingTop: '170px' }} className='container-fluid'>
                <div className="container-airbnb row">
                    {
                        dados.map((acomodacao, index) => (
                            <div key={acomodacao.id} className='mt-4 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 position-relative '>
                                <div onClick={animar} className="HeartAnimation position-absolute top-0 end-0"></div>
                                <Swiper
                                    className='img-content'
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}

                                >
                                    {
                                        acomodacao.imagens.map((imagem, index) => (
                                            <SwiperSlide className='swiperImg' key={index}>
                                                <img src={imagem} className='img-fluid cardImage' />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>


                                <p className='d-flex justify-content-between mt-3 mb-0'>
                                    <span style={{ maxWidth: '140px', display: 'block' }} className='fw-bold text-truncate'>{acomodacao.cidade},{acomodacao.pais}</span>
                                    <span><i className="bi bi-star-fill"></i>{acomodacao.nota} </span>
                                </p>
                                <p className='text-muted my-0'>{getRandonInt(10, 800)} km de distância</p>
                                <p className='text-muted'>{getRandonInt(1, 31)} de jan - {getRandonInt(1, 31)} de dez</p>
                                <p className='fw-bold'>R$ {acomodacao.preco.toLocaleString('pt-br')} noite</p>
                            </div>

                        ))
                    }


                </div>
            </div>
        )
    }

}

export default Card