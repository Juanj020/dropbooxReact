import "./video.css"
import video from "./../../img/video.mp4"

export default function Video(){
    return(
        <div className="video">
            <video width="auto" controls autoplay loop src= {video}>
            </video>   
        </div>
    )
}