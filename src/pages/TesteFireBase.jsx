import { useEffect, useState } from "react";
import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore";

export default function TesteFirebase(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function carregar(){
            const querySnapshot = await getDocs(collection(db, 'videos'));

            const lista = [];
        
            querySnapshot.array.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setVideos(lista)
        }
        carregar()
    }, []);


    return(
            <div>
      <h1>Teste Firebase</h1>

      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.titulo}</h2>
          <p>{video.tipo}</p>
          <p>{video.video}</p>
        </div>
      ))}
    </div>
    )
}