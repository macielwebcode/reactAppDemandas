//componente que precisa ter estado

import React, { Component } from 'react';
import './Main.css';
import Form from './form'
import Demandas from './demandas';

export default class Main extends Component{

    state = {
        novaDemanda: '',
        listDemandas: [],
        index: -1
    };


    componentDidMount(){
        const listDemandas = JSON.parse(localStorage.getItem('listDemandas'))

        if(!listDemandas) return;
        this.setState({ listDemandas })
    }

    componentDidUpdate(prevProps, prevState){
        const { listDemandas } = this.state

        if( listDemandas === prevState.listDemandas) return;

        localStorage.setItem('listDemandas', JSON.stringify(listDemandas))

    
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const { listDemandas, index } = this.state
        let { novaDemanda } = this.state
        novaDemanda =  novaDemanda.trim()
        if(listDemandas.indexOf(novaDemanda) !== -1) return;

        const newsDemandas = [...listDemandas]

        if(index === -1){
            this.setState({
                listDemandas: [...newsDemandas, novaDemanda]
            })
        }else{
            
            newsDemandas[index] = novaDemanda

            this.setState({
                listDemandas: [...newsDemandas],
                index: -1
            })
        }
    }


    handleChange = (e) => {
        this.setState({
            novaDemanda: e.target.value
        })
    }

    handleEdit = (e, index) => {
        const { listDemandas } = this.state
        this.setState({
            index,
            newDemanda: listDemandas[index]
        })
    }

    handleDelete = (e, index) => {
        
        const { listDemandas } =  this.state;
        const newsDemandas = [...listDemandas]
        newsDemandas.splice(index, 1)

        this.setState({
            listDemandas: [...newsDemandas]
        })
    }


    render(){

        const { novaDemanda, listDemandas } = this.state

        return (
            <div className='main'>
                <p>Lista Demandas</p>

                <Form 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaDemanda={novaDemanda}
                />
                
                <Demandas 
                    listDemandas={listDemandas}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />

            </div>
        )
    }
}