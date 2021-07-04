import React,{Component} from"react";
import {NavLink,Routes,Route} from 'react-router-dom'
import './style.scss'
import {BotaoUi, SlotProdutoContainer} from '../../components'

export default class Home extends Component{
    constructor(){
        super();
        this.retiraEspacos = this.retiraEspacos.bind(this);
    }
    arr = ['Placa Mãe','Memória Ram','Armazenamento','Placa de Vídeo','Fonte']
    retiraEspacos = (str) => {
        str = str.split(' ').map(val => {
            return val.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
        });
        
        return str.join('-').toLowerCase()
    }
    render() {
        return(
            <div className='home container'>
                <h1>Home</h1>
                <nav className="row">
                    <div className="grid-8 nav-container">
                        <NavLink end to={{pathname:"/",}} state={{background:'tomato',nome:"Processador"}} 
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
                    <Route exact path='/' element={<SlotProdutoContainer />}/>
                    <Route  path='/placa-mae' element={<SlotProdutoContainer />}/>
                    <Route  path='/memoria-ram' element={<SlotProdutoContainer />}/>
                    <Route  path='/armazenamento' element={<SlotProdutoContainer />}/>
                    <Route  path='/placa-de-video' element={<SlotProdutoContainer />}/>
                    <Route  path='/fonte' element={<SlotProdutoContainer />}/>
                </Routes>
            </div>
        )
    }
}