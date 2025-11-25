import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

export const SectionMusic = () => {

    const [musicas, setMusicas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081')
        .then((res) => {
            console.log(res.data)
            setMusicas(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

    // let musicas = [
    //     { capa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtmE3PAJs1DsL8pJUypBxRfAHa-2MK2eHMDzohlLMEuOCsBHfMYpQks_77k6cyIklGoezOPljQqliMeBSZO1TXXNWkyVpOMPvN_o_GwtHIST4FUTXZ0uRP9nrNj-VkHTWvaLdOrV36iCmz/s1600/Exaltasamba+-+T%25C3%25A1+Vendo+Aquela+Lua+%2528Capa+do+Single+FanMade%2529+Capa+por+HotFanMade.+Cover+Brasil.jpg", nome: "Tá vendo aquela lua", cantor: "Exalta Samba", link: "https://www.youtube.com/embed/O_vzefyV-4U?si=NVfrb93qdtsDyB09" },
    //     { capa: "https://i1.sndcdn.com/artworks-000463247574-m3d7wv-t500x500.jpg", nome: "Poesia 6", cantor: "Vários", link: "https://www.youtube.com/embed/jK2k1P56Cno?si=TJM0mADWFurkqrHm" },
    //     { capa: "https://pbs.twimg.com/media/FckDJYuWYAEL96K.jpg", nome: "Poesia 13", cantor: "Vários", link: "https://www.youtube.com/embed/69-jnA4QLSM?si=YzCmP9_p5_u3K8K2" },
    // ]

    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-cards">

                    {musicas.map((musica) => (
                        <div className="card-music">
                            <img src={musica.capa} alt="" />
                            <h3>{musica.nome}</h3>
                            <p>{musica.cantor}</p>
                        </div>
                    ))}
                </div>
            </section>            
        </>
    )
}