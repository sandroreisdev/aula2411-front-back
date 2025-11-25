import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalMusic } from '../../Modals/modalMusic'

export const SectionMusic = () => {

    const [musicas, setMusicas] = useState([])
    const [open, setOpen] = useState(false)
    const [musicaSelecionada, setMusicaSelecionada] = useState(null)



    useEffect(() => {
        axios.get('http://localhost:8081')
        .then((res) => {
            console.log(res.data)
            setMusicas(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

    const abrirModal = (musicaParametro) => {
        setMusicaSelecionada(musicaParametro)
        setOpen(true)
    }   

    const fecharModal = () => {
        setOpen(false)
    }

    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-cards">

                    {musicas.map((musica) => (
                        <div className="card-music" onClick={() => abrirModal(musica)}>
                            <img src={musica.capa} alt="" />
                            <h3>{musica.nome}</h3>
                            <p>{musica.cantor}</p>
                        </div>
                    ))}
                </div>
            </section>  
            <ModalMusic open={open} close={fecharModal} musica={musicaSelecionada}/>          
        </>
    )
}