import {
    collection,
    getDocs,
    query,
    where,
    addDoc,
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore'

import { db } from '../firebase/config'

export async function getVideos(categoria = null) {

    let consulta = collection(db, 'videos')

    if (categoria) {

        consulta = query(
            collection(db, 'videos'),
            where('categoria', '==', categoria)
        )

    }

    const snapshot = await getDocs(consulta)

    const videos = []

    snapshot.forEach((doc) => {

        videos.push({
            id: doc.id,
            ...doc.data()
        })

    })

    return videos
}

export async function createVideo(video) {

    const docRef = await addDoc(
        collection(db, 'videos'),
        {
            titulo: video.titulo.trim(),
            descricao: video.descricao.trim(),
            topicos: video.topicos,
            videoUrl: video.videoUrl.trim(),
            categoria: video.categoria
        }
    )

    return {
        id: docRef.id,
        titulo: video.titulo.trim(),
        descricao: video.descricao.trim(),
        topicos: video.topicos,
        videoUrl: video.videoUrl.trim(),
        categoria: video.categoria
    }
}

export async function updateVideo(id, video) {

    const videoRef = doc(
        db,
        'videos',
        id
    )

    const dadosAtualizados = {
        titulo: video.titulo.trim(),
        descricao: video.descricao.trim(),
        topicos: video.topicos,
        videoUrl: video.videoUrl.trim(),
        categoria: video.categoria
    }

    await updateDoc(
        videoRef,
        dadosAtualizados
    )

    return {
        id,
        ...dadosAtualizados
    }
}
    export async function deleteVideo(id) {

        const videoRef = doc(
            db,
            'videos',
            id
        )

        await deleteDoc(videoRef)
    }