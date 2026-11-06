import '../../styles/VideoList.css'

export default function VideoList({
    videos,
    carregando,
    onEdit,
    onDelete
}) {

    if (carregando) {
        return (
            <div className="video-list-message">
                Carregando vídeos...
            </div>
        )
    }

    if (videos.length === 0) {
        return (
            <div className="video-list-message">
                Nenhum vídeo cadastrado.
            </div>
        )
    }

    return (
        <div className="video-list">

            {videos.map((video) => (

                <div
                    className="video-admin-card"
                    key={video.id}
                >

                    <div className="video-admin-info">

                        <div className="video-admin-top">

                            <h3>
                                {video.titulo}
                            </h3>

                            <span className="video-admin-category">
                                {video.categoria}
                            </span>

                        </div>

                        <p>
                            {video.descricao}
                        </p>

                        <div className="video-admin-topics">

                            {video.topicos?.map((topico, index) => (

                                <span key={index}>
                                    {topico}
                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="video-admin-actions">

                        <button
                            type="button"
                            className="video-edit-button"
                            onClick={() => onEdit(video)}
                        >
                            Editar
                        </button>

                        <button
                            type="button"
                            className="video-delete-button"
                            onClick={() => onDelete(video)}
                        >
                            Excluir
                        </button>

                    </div>

                </div>

            ))}

        </div>
    )
}