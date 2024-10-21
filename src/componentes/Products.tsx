import { useEffect, useState } from "react";
import './Products.css'; // Asegúrate de que la ruta sea correcta

function Products() {
    const [products, setProducts] = useState<any[]>([]); // Especifica el tipo de los productos
    const [loading, setLoading] = useState<boolean>(true); // Especifica el tipo de loading

    const showProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const result = await response.json();
        setProducts(result);
        setLoading(false);
        console.log(result);
    };

    useEffect(() => {
        showProducts();
    }, []);

    if (loading) return (
        <>
            <h1>Cargando datos...</h1>
            <button onClick={showProducts}>Consultar API</button>
        </>
    );

    return (
        <>
            <h1>Lista de Productos</h1>
            <div className="product-grid">
                {products.map((item, index) => (
                    <div className="product-card" key={index}>
                        <h3>{item.title}</h3>
                        <h4>{item.price}</h4>
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
