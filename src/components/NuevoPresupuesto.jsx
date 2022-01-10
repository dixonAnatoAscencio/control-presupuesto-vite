import {useState} from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    
    const [mensaje, setMensaje] = useState('')
    
    
    //funcion para administrar el presupuesto
    const handlePresupuesto = (e) =>{
        e.preventDefault()
        
        //Validacion del presupuesto

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un Presupuesto valido')
        
            return
        }
            setMensaje('')
            setIsValidPresupuesto(true)
       

        
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            
            
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                        />
                        
                </div>

                <input type="submit" value="añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
