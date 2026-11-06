import { useEffect, useState } from 'react'

import '../../styles/VideoFormModal.css'

export default function VideoFormModal({
    aberto,
    modo = 'criar',
    video = null,
    onClose,
    onSubmit,
    enviando = false
}) {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [topicos, setTopicos] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [categoria, setCategoria] = useState('')

    const [erro, setErro] = useState('')

    /*
        Quando o modal abrir para editar um vídeo,
        preenchemos os campos com os dados dele.

        Quando for criar, os campos ficam vazios.
    */

    useEffect(() => {

        if (!aberto) {
            return
        }

        setErro('')

        if (modo === 'editar' && video) {

            setTitulo(video.titulo || '')
            setDescricao(video.descricao || '')
            setTopicos(
                Array.isArray(video.topicos)
                    ? video.topicos.join(', ')
                    : ''
            )
            setVideoUrl(video.videoUrl || '')
            setCategoria(video.categoria || '')

            return
        }

        setTitulo('')
        setDescricao('')
        setTopicos('')
        setVideoUrl('')
        setCategoria('')

    }, [aberto, modo, video])

    if (!aberto) {
        return null
    }

    function handleSubmit(e) {

        e.preventDefault()

        setErro('')

        const tituloLimpo = titulo.trim()
        const descricaoLimpa = descricao.trim()
        const urlLimpa = videoUrl.trim()

        const topicosArray = topicos
            .split(',')
            .map((topico) => topico.trim())
            .filter(Boolean)

        // =========================
        // CAMPOS OBRIGATÓRIOS
        // =========================

        if (
            !tituloLimpo ||
            !descricaoLimpa ||
            !urlLimpa ||
            !categoria ||
            topicosArray.length === 0
        ) {
            setErro('Preencha todos os campos.')
            return
        }

        // =========================
        // CATEGORIA
        // =========================

        const categoriasPermitidas = [
            'Hardware',
            'Software',
            'Internet'
        ]

        if (!categoriasPermitidas.includes(categoria)) {
            setErro('Selecione uma categoria válida.')
            return
        }

        // =========================
        // URL
        // =========================

        try {

            const url = new URL(urlLimpa)

            if (
                url.protocol !== 'http:' &&
                url.protocol !== 'https:'
            ) {
                setErro(
                    'A URL deve começar com http:// ou https://.'
                )

                return
            }

        } catch {

            setErro('Digite uma URL válida.')
            return

        }

        /*
            O modal não chama o Firestore.

            Apenas devolve os dados já validados
            para quem abriu o modal.
        */

        onSubmit({
            titulo: tituloLimpo,
            descricao: descricaoLimpa,
            topicos: topicosArray,
            videoUrl: urlLimpa,
            categoria
        })
    }

    return (
        <div
            className="video-modal-overlay"
            onMouseDown={onClose}
        >

            <div
                className="video-modal"
                onMouseDown={(e) => e.stopPropagation()}
            >

                <div className="video-modal-header">

                    <div>

                        <span className="video-modal-tag">
                            {modo === 'editar'
                                ? 'EDITAR VÍDEO'
                                : 'NOVO VÍDEO'}
                        </span>

                        <h2>
                            {modo === 'editar'
                                ? 'Editar vídeo'
                                : 'Adicionar vídeo'}
                        </h2>

                        <p>
                            {modo === 'editar'
                                ? 'Altere as informações do vídeo.'
                                : 'Preencha as informações do novo vídeo.'}
                        </p>

                    </div>

                    <button
                        type="button"
                        className="video-modal-close"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </button>

                </div>

                <form
                    className="video-modal-form"
                    onSubmit={handleSubmit}
                >

                    <div className="video-modal-field">

                        <label htmlFor="video-titulo">
                            Título
                        </label>

                        <input
                            id="video-titulo"
                            type="text"
                            value={titulo}
                            onChange={(e) =>
                                setTitulo(e.target.value)
                            }
                            placeholder="Ex.: Microsoft Word"
                            maxLength={150}
                            required
                        />

                    </div>

                    <div className="video-modal-field">

                        <label htmlFor="video-descricao">
                            Descrição
                        </label>

                        <textarea
                            id="video-descricao"
                            value={descricao}
                            onChange={(e) =>
                                setDescricao(e.target.value)
                            }
                            placeholder="Descreva o conteúdo do vídeo..."
                            maxLength={500}
                            required
                        />

                    </div>

                    <div className="video-modal-field">

                        <label htmlFor="video-topicos">
                            Tópicos
                        </label>

                        <input
                            id="video-topicos"
                            type="text"
                            value={topicos}
                            onChange={(e) =>
                                setTopicos(e.target.value)
                            }
                            placeholder="Ex.: texto, documentos, formatação"
                            maxLength={300}
                            required
                        />

                        <small>
                            Separe os tópicos por vírgula.
                        </small>

                    </div>

                    <div className="video-modal-field">

                        <label htmlFor="video-url">
                            URL do vídeo
                        </label>

                        <input
                            id="video-url"
                            type="url"
                            value={videoUrl}
                            onChange={(e) =>
                                setVideoUrl(e.target.value)
                            }
                            placeholder="https://..."
                            maxLength={500}
                            pattern="https?://.+"
                            title="Digite uma URL começando com http:// ou https://"
                            required
                        />

                    </div>

                    <div className="video-modal-field">

                        <label htmlFor="video-categoria">
                            Categoria
                        </label>

                        <select
                            id="video-categoria"
                            value={categoria}
                            onChange={(e) =>
                                setCategoria(e.target.value)
                            }
                            required
                        >

                            <option
                                value=""
                                disabled
                            >
                                Selecione uma categoria
                            </option>

                            <option value="Hardware">
                                Hardware
                            </option>

                            <option value="Software">
                                Software
                            </option>

                            <option value="Internet">
                                Internet
                            </option>

                        </select>

                    </div>

                    {erro && (
                        <div className="video-modal-error">
                            {erro}
                        </div>
                    )}

                    <div className="video-modal-actions">

                        <button
                            type="button"
                            className="video-modal-cancel"
                            onClick={onClose}
                            disabled={enviando}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="video-modal-submit"
                            disabled={enviando}
                        >
                            {enviando
                                ? 'Salvando...'
                                : modo === 'editar'
                                    ? 'Salvar alterações'
                                    : 'Adicionar vídeo'}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}