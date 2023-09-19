import "./contenido.css"
import Video from "../contenido-video/video"
import Titulo from "../titulo/titulo"

export default function Contenido(){
    return (
        <div className="contenido">
            <div className="cont-izq">
            </div>
            <div class="cont-cen">
                <Titulo></Titulo>
                <Video></Video>
            </div>
            <div className="cont-der">
            </div>
        </div>
    )
}
