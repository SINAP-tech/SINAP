import {
    useEffect,
    useState
} from 'react'

import {
    createVideo,
    getVideos,
    updateVideo,
    deleteVideo
} from '../../services/videoService'

import { logout } from '../../services/authService'
import { useAuth } from '../../hooks/useAuth'

import ConfirmModal from '../../components/admin/ConfirmModal'
import VideoFormModal from '../../components/admin/VideoFormModal'
import VideoList from '../../components/admin/VideoList'

import '../../styles/Admin.css'

export default function Admin() {

    const { user } = useAuth()

    const [videos, setVideos] = useState([])
    const [carregandoVideos, setCarregandoVideos] = useState(true)

    const [modoModal, setModoModal] = useState('criar')
    const [modalAberto, setModalAberto] = useState(false)
    
    const [enviando, setEnviando] = useState(false)

    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')
    
    const [videoSelecionado, setVideoSelecionado] = useState(null)

    const [confirmAberto, setConfirmAberto] = useState(false)

    const [videoParaExcluir, setVideoParaExcluir] = useState(null)

    const [excluindo, setExcluindo] = useState(false)

    async function carregarVideos() {

        try {

            setCarregandoVideos(true)

            const lista = await getVideos()

            setVideos(lista)

        } catch (error) {

            console.error(
                'Erro ao carregar vídeos:',
                error
            )

            setErro(
                'Não foi possível carregar os vídeos.'
            )

        } finally {

            setCarregandoVideos(false)

        }
    }


    useEffect(() => {

        carregarVideos()

    }, [])


    function abrirCriacao() {

        setErro('')
        setSucesso('')
        
        setModoModal('criar')
        setVideoSelecionado(null)

        setModalAberto(true)
    }


    function fecharModal() {

        if (enviando) {
            return
        }

    setModalAberto(false)
    setVideoSelecionado(null)
    }


    async function handleCreateVideo(dados) {

        try {

            setEnviando(true)

            setErro('')
            setSucesso('')

            await createVideo(dados)

            setSucesso(
                'Vídeo adicionado com sucesso!'
            )

            setModalAberto(false)

            // Atualiza a lista automaticamente
            await carregarVideos()

        } catch (error) {

            console.error(
                'Erro ao criar vídeo:',
                error
            )

            if (error.code === 'permission-denied') {

                setErro(
                    'Você não tem permissão para adicionar vídeos.'
                )

            } else {

                setErro(
                    'Não foi possível adicionar o vídeo.'
                )

            }

        } finally {

            setEnviando(false)

        }
    }


    function handleEditar(video) {
        setErro('')
        setSucesso('')

        setModoModal('editar')
        setVideoSelecionado(video)

        setModalAberto(true)
            
    }


    function handleExcluir(video) {

        setErro('')
        setSucesso('')

        setVideoParaExcluir(video)
        setConfirmAberto(true)
    }
    async function handleUpdateVideo(dados) {

        if (!videoSelecionado) {
            return
        }

        try {

            setEnviando(true)

            setErro('')
            setSucesso('')

            await updateVideo(
                videoSelecionado.id,
                dados
            )

            setSucesso(
                'Vídeo atualizado com sucesso!'
            )

            setModalAberto(false)
            setVideoSelecionado(null)

            await carregarVideos()

        } catch (error) {

            console.error(
                'Erro ao atualizar vídeo:',
                error
            )

            if (error.code === 'permission-denied') {

                setErro(
                    'Você não tem permissão para editar vídeos.'
                )

            } else {

                setErro(
                    'Não foi possível atualizar o vídeo.'
                )
            }

        } finally {

            setEnviando(false)

        }
    }
    async function confirmarExclusao() {

    if (!videoParaExcluir) {
        return
    }

    try {

        setExcluindo(true)

        setErro('')
        setSucesso('')

        await deleteVideo(
            videoParaExcluir.id
        )

        setSucesso(
            'Vídeo excluído com sucesso!'
        )

        setConfirmAberto(false)
        setVideoParaExcluir(null)

        await carregarVideos()

    } catch (error) {

        console.error(
            'Erro ao excluir vídeo:',
            error
        )

        if (error.code === 'permission-denied') {

            setErro(
                'Você não tem permissão para excluir vídeos.'
            )

        } else {

            setErro(
                'Não foi possível excluir o vídeo.'
            )
        }

    } finally {

        setExcluindo(false)

    }
}
    function fecharConfirmacao() {

        if (excluindo) {
            return
        }

        setConfirmAberto(false)
        setVideoParaExcluir(null)
    }

    async function handleLogout() {

        try {

            await logout()

        } catch (error) {

            console.error(
                'Erro ao sair:',
                error
            )

        }

    }


    return (
        <main className="admin-page">

            <header className="admin-header">

                <div>

                    <h1>
                        Painel Administrativo
                    </h1>

                    <p>
                        Gerenciamento de vídeos do SINAP
                    </p>

                </div>

                <div className="admin-user">

                    <span>
                        {user?.email}
                    </span>

                    <button
                        type="button"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>

                </div>

            </header>


            <section className="admin-content">

                <div className="admin-card">

                    <div className="admin-card-header">

                        <span>
                            VÍDEOS
                        </span>

                        <h2>
                            Gerenciar vídeos
                        </h2>

                        <p>
                            Adicione, edite ou remova
                            conteúdos do SINAP.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="admin-submit"
                        onClick={abrirCriacao}
                    >
                        + Adicionar vídeo
                    </button>


                    {erro && (
                        <div className="admin-message admin-error">
                            {erro}
                        </div>
                    )}


                    {sucesso && (
                        <div className="admin-message admin-success">
                            {sucesso}
                        </div>
                    )}


                    <VideoList
                        videos={videos}
                        carregando={carregandoVideos}
                        onEdit={handleEditar}
                        onDelete={handleExcluir}
                    />

                </div>

            </section>


           <VideoFormModal
                aberto={modalAberto}
                modo={modoModal}
                video={videoSelecionado}
                onClose={fecharModal}
                onSubmit={
                    modoModal === 'editar'
                        ? handleUpdateVideo
                        : handleCreateVideo
                }
                enviando={enviando}
            />
                <ConfirmModal
                aberto={confirmAberto}
                video={videoParaExcluir}
                onClose={fecharConfirmacao}
                onConfirm={confirmarExclusao}
                excluindo={excluindo}
            />
        </main>
    )
}