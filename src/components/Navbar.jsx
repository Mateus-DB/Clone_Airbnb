import React from 'react'
import { useState, useEffect } from 'react';
import './css/Navbar.css';
import logo from '../assets/airbnb.svg';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    return (

        <div>
            <nav className='nav-topo fixed-top'>
                <div className='container-airbnb'>
                    <div className='ps-sm-4 col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center '>
                        <img className='logo' src={logo} alt='logo do site'></img>
                    </div>
                    <div className='d-none d-sm-flex col-sm-6  align-items-center justify-content-end  '>
                        <a href='#' className='link-especial'>Seja um anfitrião</a>
                        <a href='#' className='icon-nav mx-2'><FontAwesomeIcon className='icon' icon={faEarthAmericas} /></a>
                        <div className="dropdown mx-3 ">
                            <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon className='fs-5 text-dark' icon={faBars} />
                                <FontAwesomeIcon className='fs-3 ps-2 position-relative text-dark' icon={faCircleUser}></FontAwesomeIcon> <span ame="position-absolute top-0 end-0 badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                            </a>

                            <ul style={{ borderRadius: '15px' }} className="dropdown-menu py-3 mt-2 border-0 shadow">
                                <li><a className="dropdown-item p-2 px-3 fw-bold" href="#">Cadastre-se</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav id="mobile" className=' d-sm-none bg-white fixed-bottom d-flex align-items-center justify-content-around'>
                <a href="#" onClick={(e, i) => handleClick} className='d-flex flex-column text-center nav-icon active '>
                    <i className="bi bi-compass-fill fs-3"></i>
                    <span>Explorar</span>
                </a>
                <a href="#" onClick={(e, i) => handleClick} className='d-flex flex-column text-center nav-icon '>
                    <i className="bi bi-heart-fill fs-3"></i>
                    <span>favoritos</span>
                </a>
                <a href="#" onClick={(e, i) => handleClick} className='d-flex flex-column text-center nav-icon'>
                    <i className="bi bi-person-circle fs-3"></i>
                    <span>Usuário</span>
                </a>
            </nav>
        </div>
    )
}
