import React, { useState, useEffect } from 'react';
import './estilo.css';

const RegistrarActivo = () => {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [cantidad, setCantidad] = useState<number | string>('');

    // Estado para manejar los tipos de activos disponibles
    const [tiposActivos, setTiposActivos] = useState<any[]>([]);

    // Simula una carga de datos desde una API para los tipos de activos
    useEffect(() => {
        const fetchTiposActivos = async () => {
            // Aquí puedes reemplazar esto con tu lógica de obtención de datos real (por ejemplo, una llamada a una API)
            const datosSimulados = [
                { id: 1, nombre: 'Computadora' },
                { id: 2, nombre: 'Impresora' },
                { id: 3, nombre: 'Monitor' },
            ];

            setTiposActivos(datosSimulados); // Actualiza el estado con los datos obtenidos
        };

        fetchTiposActivos();
    }, []); // El array vacío asegura que solo se ejecute una vez después de que el componente se monte

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validación básica
        if (!nombre || !tipo || !proveedor || !descripcion || !ubicacion || !cantidad) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Lógica para enviar los datos del formulario (puedes reemplazar esto con una llamada a una API)
        const nuevoActivo = {
            nombre,
            tipo,
            proveedor,
            descripcion,
            ubicacion,
            cantidad,
        };

        console.log('Nuevo Activo Registrado:', nuevoActivo);

        // Resetea el formulario después del envío
        setNombre('');
        setTipo('');
        setProveedor('');
        setDescripcion('');
        setUbicacion('');
        setCantidad('');
    };

    return (
        <div>
            <h1>Registrar Activo</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre del Activo:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="tipo">Tipo de Activo:</label>
                    <select
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        required
                    >
                        <option value="">Selecciona un tipo</option>
                        {tiposActivos.map((tipo) => (
                            <option key={tipo.id} value={tipo.nombre}>
                                {tipo.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="proveedor">Proveedor:</label>
                    <input
                        type="text"
                        id="proveedor"
                        value={proveedor}
                        onChange={(e) => setProveedor(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="ubicacion">Ubicación:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input
                        type="number"
                        id="cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Registrar Activo</button>
            </form>
        </div>
    );
};

export default RegistrarActivo;
