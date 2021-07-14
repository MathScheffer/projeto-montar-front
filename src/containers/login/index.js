import React, { Component } from 'react'
import { Navigate  } from 'react-router-dom';
import style from './Login.module.css';
import Api from '../../api';
import useLogin from '../../customHooks/useLogin';

export default class Login extends Component {
    constructor(){
        super();
        this.api = new Api();
        this.state = {
            authResponse:null,
            authError:null
        };

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

        if(this.state.nome && this.state.senha){
            console.log(this.state.nome)
            console.log(this.state.senha)
            const body = {
                username: this.state.nome,
                senha: this.state.senha
            }
            this.api.autenticacao(body)
                .then(body => this.setState(
                    {authResponse:body,authError:null}))
                .catch(err => {
                    this.setState({authError:err,authResponse:null});
                    console.log(err)
                })
        }
/*         localStorage.setItem("usuario",this.state.nome+this.state.senha);
        
        this.setState((state) => {
            return{...state,redirect:true}
        }) */
    }

    componentDidUpdate(){
        if(this.state.authResponse){
            console.log('Realizando login!')
            console.log(this.state.authResponse.token)
            localStorage.setItem("usuario_token",this.state.authResponse.token);

            this.setState((state) => {
                return{...state,redirect:true}
            })
        }
        if(this.state.authError){
            console.log(this.state.authError)
        }
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
