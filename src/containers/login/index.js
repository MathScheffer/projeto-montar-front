import React, { Component } from 'react'
import { Navigate  } from 'react-router-dom';
import style from './Login.module.css';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {
        const nome = event.target.id
        const value = event.target.value
        this.setState({
            [nome]:value
        })
      }
    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("usuario",this.state.nome+this.state.senha);
        
        this.setState((state) => {
            return{...state,redirect:true}
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }
    render() {
        const redirect = this.state.redirect;
        return (
            redirect ? <Navigate to="/" />:
            <section>
                <div className={`row ${style.formularioContainerRow}`}>
                    <div className={`grid-5 ${style.formularioContainerGrid}`}>
                        <form onSubmit={this.handleSubmit} className={`${style.formulario}`}>
                            <input id="nome" type="text" placeholder="usuario" value={this.state.nome}onChange={this.handleChange}/>
                            <input id="senha" type="password" placeholder="senha"value={this.state.senha} onChange={this.handleChange}/>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
