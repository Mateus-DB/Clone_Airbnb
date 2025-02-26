import React from 'react'
import { useState, useEffect } from 'react';
import './css/PriceSlider.css'

export default function PriceSlider(props) {

    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);
    const [left, setLeft] = useState('0%')
    const [right, setRight] = useState('0%')

    function changeRangeMin(e) {

        if (parseInt((e.target.value) - max) >= props.step) {
            // console.log('limite mínimo alcançado!')
        } else {
            setMin(parseInt((e.target.value)))
            if (min == props.min) {
                setLeft('0%')
            } else {
                var totalBarra = props.max - props.min;
                var qtsSteps = min - props.min;

                setLeft(((qtsSteps * 100) / totalBarra) + '%')

            }
        }


    }

    function changeRangeMax(e) {

        if (parseInt((e.target.value) - min) <= props.step) {
            // console.log('Limite máximo alcançado ')
        } else {
            setMax(parseInt((e.target.value)))
            if (max == props.max) {
                setRight('0%')
            } else {
                var totalBarra = props.max - props.min;
                var qtsSteps = props.max - max;

                setRight(((qtsSteps * 100) / totalBarra) + '%')

            }
        }


    }

    useEffect(() => {
        if (min == props.min) {
            document.getElementById('inputMin').value = props.min;
        } else {
            document.getElementById('inputMin').value = min;
        }
        props.filterByPrice(props.catID, min, max);
    }, [min]);

    useEffect(() => {
        if (max == props.max) {
            document.getElementById('inputMax').value = props.max;
        } else {
            document.getElementById('inputMax').value = max;
        }
        props.filterByPrice(props.catID, min, max);
    }, [max]);

    function validacao(e) {
        //campo inputMin
        let inputMin = document.getElementById('inputMin');
        //campo inputMax
        let inputMax = document.getElementById('inputMax');
        //recuperar o valor do campo input
        let valor = parseInt(e.target.value);
        // se o campo input for input min
        if (e.target.id === 'inputMin') {
            //verificar se o campo é vazio ou nulo
            if (e.target.value == '' || e.target.value == null) {
                //setar para o mínimo permitido
                setMin(props.min);
                setLeft('0%');
                //mudar o valor do campo inputMin para valor mínimo
                inputMin.value = props.min;

            } else {
                //verificar se o valor é menor que o mínimo
                if (valor < props.min) {
                    //setar para o mínimo permitido
                    setMin(props.min);
                    setLeft('0%');
                    //mudar o valor do campo inputMin para valor mínimo
                    inputMin.value = props.min;
                } else {
                    //verificar se o min é maior que max
                    if (valor >= max) {
                        let corrige = max - props.step;
                        setMin(corrige);

                        let totalBarra = props.max - props.min
                        let qtsSteps = valor - props.min;

                        setLeft(((qtsSteps * 100) / totalBarra) + '%');

                        inputMin.value = corrige

                    } else {
                        //valor é menor que o permitido. todo certo
                        setMin(valor);
                        //movimentar a barra 
                        let totalBarra = props.max - props.min
                        let qtsSteps = valor - props.min;

                        setLeft(((qtsSteps * 100) / totalBarra) + '%');


                    }
                }
            }

        }

        //se o campo for inputMax
        if (e.target.id == 'inputMax') {

            //verificar se o valor digitado é vazio ou nulo
            if (e.target.value == '' || e.target.value == null) {
                //setar para o maximo permitido
                setMax(props.max);
                setRight('0%');
                inputMax.value = props.max;
            } else {

                //se o valor digitado for maior que o máximo permitido
                if (valor > props.max) {
                    //setar para o máximo permitido
                    setMax(props.max);
                    setRight('0%');
                    //mudar o campo para maxímo
                    inputMax.value = props.max;
                } else {
                    //valor digitado for menor que máximo permitido
                    //verificar se o max é menor que min
                    if (valor <= min) {
                        let corrige = min + props.step;
                        setMax(corrige);

                        //movimentar a barra
                        let totalBarra = props.max - props.min;
                        let qtsSteps = props.max - valor;

                        setRight(((qtsSteps * 100) / totalBarra) + '%');
                        inputMax.value = corrige;

                    } else {
                        //tudo certo
                        //se o valor digitado é maior que mínimo
                        setMax(valor);
                        //movimentar a barra
                        let totalBarra = props.max - props.min;
                        let qtsSteps = props.max - valor;

                        setRight(((qtsSteps * 100) / totalBarra) + '%');

                    }
                }
            }


        }
    }

    function soNumero(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div>
            <div className='slider'>
                <div style={{ left: left, right: right }} className='progress'></div>
            </div>
            <div className='range-input'>
                <input id='rangeMin' onChange={changeRangeMin} type="range" min={props.min} max={props.max} step={props.step} value={min} />
                <input id='rangeMax' onChange={changeRangeMax} type="range" min={props.min} max={props.max} step={props.step} value={max} />
            </div>
            <div className='row mt-4'>
                <div className='col'>
                    <label className='text-muted'>Preço Mínimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMin' onBlur={validacao} onKeyPress={(e) => { (e.key == 'Enter' ? validacao(e) : soNumero(e)) }} type="text" className="form-control" placeholder="Min" />
                    </div>

                </div>
                <div className='col'>
                    <label className='text-muted'>Preço Máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' onBlur={validacao} onKeyPress={(e) => { (e.key == 'Enter' ? validacao(e) : soNumero(e)) }} type="text" className="form-control" placeholder="Max" />
                    </div>
                </div>
            </div>
        </div>
    )
}
