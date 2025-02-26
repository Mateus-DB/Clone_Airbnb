import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


//importar css das categorias
import './css/Categorias.css'

//importar os dados de categoria
import { categorias } from '../../backend/dados';
import { faFilter } from '@fortawesome/free-solid-svg-icons';



export default function Categorias({ changeCat }) {

    const [idClicado, setIdClicado] = useState(1);
    const handleClick = (e, id) => {
        setIdClicado(id)
        changeCat(id)
    }

    return (
        <div style={{ marginTop: '80px', position: 'fixed', top: '0', zIndex: '999' }} className=' bg-white container-fluid pt-2 d-flex justify-content-between align-items-center '>
            <div className='container-airbnb d-flex align-items-center  row'>
                <div className='col-sm-11'>
                    <Swiper

                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 1
                            },
                            //JANELA MAIOR QUE 576 (SM)
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 4
                            },
                            //JANELA MAIOR QUE 1200 (MD)
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1200 (LG)
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1200 (XL)
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1400
                            1400: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE >=1600 (XXL)
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetween: 7
                            }
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categorias.map((dados, index) => (
                                <SwiperSlide key={dados.id}
                                    virtualIndex={index}
                                    className={dados.id === idClicado ? 'active' : ' '}
                                    onClick={(e) => handleClick(e, dados.id)}>
                                    <img className='mb-2' src={dados.imagem}></img>
                                    <span>{dados.titulo}</span>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>
                <div className='col-sm-1'>
                    <button className='d-none d-sm-flex d-lg-none justify-content-center w-100 float-end  btn btn-filtro ' data-bs-toggle='modal' data-bs-target='#filterModal'>
                        <i className="me-2 bi bi-filter ps-2"></i>

                    </button>
                    <button className='d-none d-lg-flex btn btn-filtro float-end' data-bs-toggle='modal' data-bs-target='#filterModal'>
                        <i className="me-2 bi bi-filter"></i>
                        filtrar
                    </button>
                </div>
            </div>
        </div>
    )
}
