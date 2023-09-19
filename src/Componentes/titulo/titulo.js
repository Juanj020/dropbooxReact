import "./titulo.css";

export default function Titulo(){
    return(
        <div className="titulo">
            <h2>Únete a los más de 700 millones de usuarios registrados que confian en Dropbox</h2>
            <h4>Facil de utilizar, confiable, privado y seguro.mNo es de extrañar que Dropbox sea la elección para almacenar y compartir tus archivos más importantes</h4>
            <div className="titulo-btn">
                <h4>Encuentra tu plan</h4>
                <img src="https://iconos8.es/icon/11686/flecha" alt="" srcset=""/>
                <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" 
                focusable="false">
                    <path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" 
                    vector-effect="non-scaling-stroke"></path>
                </svg>
            </div>
        </div>
    )
}
