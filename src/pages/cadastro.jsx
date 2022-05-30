import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import FindrInput from "../components/findr-input";
import FindrButton from '../components/findr-button';
import { Link } from 'react-router-dom'
import "../styles/findr-cadastro-style.css"
import { axios } from 'axios';

function postUser() {

};


function Cadastro() {

    return (
        <>
            <div class="ajuste-tela">
                <div className="container-content-form">
                    <img src="https://images.pexels.com/photos/3201585/pexels-photo-3201585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="text-input">
                        <p>Crie sua conta de freelancer e encontre projetos de forma rápida e prática</p>
                    </div>

                    <div className="container-inputs">
                        <div class="individual-input-cadastro">
                            <p>Nome:</p>
                            <FindrInput id=""/>
                        </div>
                        <div class="individual-input-cadastro">
                            <p>CPF:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>E-mail:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Telelfone:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Senha:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Confirmar senha:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Estado:</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Cidade</p>
                            <FindrInput id="" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Nacionalidade</p>
                            <FindrInput id="" />
                        </div>
                        <br />
                        <div className="text-acceptance">
                            <h3 className='i-acceptance'> <input type="checkbox" id="checkbox-accept" /> Eu aceito os termos de uso</h3>
                            <FindrButton component={Link} to="localhost:8080/freelancer" onClick={() => postUser()} label="Cadastro" />
                            <h4 className='login-here'>Já tem conta? Faça o login <a href="#">aqui</a> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;