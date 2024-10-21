import { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from "react-router-dom"; // Cambiado a useNavigate

function Maps() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const myMap = useRef<Map | null>(null);
    const navigate = useNavigate(); // Hook para manejar la navegación

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYWFyb25iYWxhbSIsImEiOiJjbTJpNjR5MWcwajBhMm5weHR0MG9zcnQxIn0.6juQ4ScK2x6HJTHzzAa8Pg";
        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [-86.85920188260499, 21.13876824758264],
                zoom: 11.5
            });

            // Marcadores en el mapa
            new mapboxgl.Marker({ color: 'red' })
                .setLngLat([-86.85920188260499, 21.13876824758264])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 1</h3>
                    <p>Dirección: Av. Cancún #123</p>
                    <button onclick="window.location.href='https://maps.google.com'">Ver en Google Maps</button>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 1" width="100" />
                `))
                .addTo(myMap.current);

            new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([-86.82295093795713, 21.158377108024425])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 2</h3>
                    <p>Dirección: Av. Kukulcán #456</p>
                    <button onclick="window.location.href='https://maps.google.com'">Ver en Google Maps</button>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 2" width="100" />
                `))
                .addTo(myMap.current);

            new mapboxgl.Marker({ color: 'green' })
                .setLngLat([-86.84469992461567, 21.061827843687674])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 3</h3>
                    <p>Dirección: Av. Tulum #789</p>
                    <button onclick="window.location.href='https://maps.google.com'">Ver en Google Maps</button>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 3" width="100" />
                `))
                .addTo(myMap.current);
        }
        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        };
    }, []);

    const handleBackToHome = () => {
        navigate('/'); // Cambia a la ruta del inicio
    };

    return (
        <div>
            <button onClick={handleBackToHome} style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1 }}>
                Regresar al Inicio
            </button>
            <div ref={mapContainer} style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh" }}></div>
        </div>
    );
}

export default Maps;
