import prod_1_image from '../assets/prod_1.png'
import prod_2_image from '../assets/prod_2.png'
import prod_3_image from '../assets/prod_3.png'
import prod_4_image from '../assets/prod_4.png'


const Products = () => {
    return (
        <div class = "py-2 px-12 max-w-7xl">
            <div class = "py-4 sm:py-8 px-6 sm:px-12 mb-12">
                <div class = "relative inline-block">
                    <h1 class = "text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight underline decoration-4 decoration-gateway-logo underline-offset-4">Products</h1>
                </div>  
                {/* <hr class = "my-4 border-t-2 border-double border-gateway-logo"></hr> */}
                {/* <div class = "absolute left-1/2 transform -translae-x-1/2 bottom-0 h-0.5 w-3/4 bg-gateway-logo"></div> */}
            </div>
            <div class = "grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_1_image} alt = "Product 1" class = "shadow-lg w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900 px-4 py-2">Mixed Paper (MP)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_2_image} alt = "Product 2" class = "shadow-lg w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Old Corrugated Containers (OCC)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_3_image} alt = "Product 3" class = "shadow-lg w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Double Sorted Old Corrugated Containers (DSOCC)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_4_image} alt = "Product 4" class = "shadow-lg w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Sorted Office Paper (SOP)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_1_image} alt = "Product 5" class = "shadow-lg blur-md w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Coated Book Stock (MP)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_3_image} alt = "Product 1" class = "shadow-lg blur-md w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Cup Stock (#1)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_2_image} alt = "Product 1" class = "shadow-lg blur-md w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Cup Stock (#2)</h2>  
                </div>
                <div class = "flex flex-col items-center text-center">
                    <img src = {prod_4_image} alt = "Product 1" class = "shadow-lg blur-md w-96 h-72 object-cover"></img>
                    <h2 class = "text-xl font-semibold text-gray-900">Coated Soft White Shavings (SWS)</h2>  
                </div>
            </div>
        </div>
    );
}

export default Products;