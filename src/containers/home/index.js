import React,{Component} from"react";
import {NavLink,Routes,Route} from 'react-router-dom'
import './style.scss'
import {BotaoUi, ComputadorContainer, SlotProdutoContainer} from '../../components'

export default class Home extends Component{
    constructor(){
        super();
        this.retiraEspacos = this.retiraEspacos.bind(this);
    }
    arr = ['Placa Mãe','Memória Ram','Armazenamento','Placa de Vídeo','Fonte','Computador']
    retiraEspacos = (str) => {
        str = str.split(' ').map(val => {
            return val.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
        });
        
        return str.join('-').toLowerCase()
    }
    render() {
        return(
            <div className='home container'>
                <h1 style={{textAlign:"center"}}>Escolha uma opção para começar!</h1>
                <nav className="row">
                    <div className="grid-8 nav-container">
                        <NavLink end to={{pathname:"/processador",}} state={{background:'tomato',nome:"Processador"}} 
                            className='nav-btn'>Processador</NavLink>
                        {this.arr.map(str => 
                            <NavLink key={this.retiraEspacos(str)} 
                                className='nav-btn'
                                state={{nome: str}} 
                                to={`/${this.retiraEspacos(str)}`}>{str}</NavLink>)
                        }
                    </div>

                </nav>

                <Routes>
                    <Route exact path='/processador' element={<SlotProdutoContainer categoria="processador"/>}/>
                    <Route  path='/placa-mae' element={<SlotProdutoContainer categoria="placa-mae"/>}/>
                    <Route  path='/memoria-ram' element={<SlotProdutoContainer categoria="ram"/>}/>
                    <Route  path='/armazenamento' element={<SlotProdutoContainer categoria="armazenamento"/>}/>
                    <Route  path='/placa-de-video' element={<SlotProdutoContainer categoria="vga"/>}/>
                    <Route  path='/fonte' element={<SlotProdutoContainer categoria="fonte"/>}/>
                    <Route  path='/computador' element={<SlotProdutoContainer isComputador={true}/>}/>
                </Routes>
            </div>
        )
    }
}