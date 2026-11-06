import '../../styles/ConfirmModal.css'

export default function ConfirmModal({
    aberto,
    video,
    onClose,
    onConfirm,
    excluindo = false
}) {

    if (!aberto) {
        return null
    }

    return (
        <div
            className="confirm-overlay"
            onMouseDown={onClose}
        >

            <div
                className="confirm-modal"
                onMouseDown={(e) => e.stopPropagation()}
            >

                <div className="confirm-icon">
                    ⚠️
                </div>

                <h2>
                    Excluir vídeo?
                </h2>

                <p>
                    Você tem certeza que deseja excluir
                    <strong>
                        {' "'}{video?.titulo}{'"'}
                    </strong>
                    ?
                </p>

                <p className="confirm-warning">
                    Essa ação não poderá ser desfeita.
                </p>

                <div className="confirm-actions">

                    <button
                        type="button"
                        className="confirm-cancel"
                        onClick={onClose}
                        disabled={excluindo}
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        className="confirm-delete"
                        onClick={onConfirm}
                        disabled={excluindo}
                    >
                        {excluindo
                            ? 'Excluindo...'
                            : 'Excluir vídeo'}
                    </button>

                </div>

            </div>

        </div>
    )
}