import { Modal, useScrollTrigger } from "@mui/material"
import './style.css'
import axios from "axios"
import { useState } from "react"

export const ModalCreate = ({ open, close }) => {

        const [nome, setNome] = useState()
        const [capa, setCapa] = useState()
        const [link, setLink] = useState()
        const [cantor, setCantor] = useState()
        

        const cadastro = () => {
            const novaMusica = {
        
                nome: nome,
                cantor: cantor,
                link:link,
                capa:capa
            }

            axios.post('http://localhost:8081/cadastrar', novaMusica)
            .then((res) => console.log(res) )
            .cath((err) => console.log(err))
        }

    return (

        <Modal open={open} onClose={close} className="container-modal">
            <div className="container-card-modal">
                <form>
                    <div>
                        <label htmlFor="">Nome da Música</label>
                        <input type="text" placeholder="Nome da música" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Capa da Música</label>
                        <input type="text" placeholder="Capa da música" value={capa} onChange={(e) => setCapa(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Link da música</label>
                        <input type="text" placeholder="Link da música" value={link} onChange={(e) => setLink(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="">Cantor da música</label>
                        <input type="text" placeholder="Cantor da música" value={cantor} onChange={(e) => setLink(e.target.value)}/>
                    </div>
                    <button className="btn" onClick={() => cadastro()}>Cadastrar</button>
                </form>
            </div>

        </Modal>

    )
}