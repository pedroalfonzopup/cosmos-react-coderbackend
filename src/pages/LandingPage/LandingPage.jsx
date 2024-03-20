import { useState, useEffect } from 'react'
import axios from "axios"
import reactLogo from '../../assets/react.svg'

function LandingPage() {
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios("http://localhost:8080/api/products")
            .then((res) => {
                setProducts(res.data.response.docs)
                setNext(res.data.response.nextPage)
                setPrev(res.data.response.prevPage)
            })
            
            .catch((err)=>console.log(err))
    },[])
  return (
    <>
        <main class="Index">
            <h1 className="Index-welcome"> WELCOME TO COSMOS </h1>
            <div className="Index-front">
                <div className="Index-front_imgContainer">
                    <img
                    className="Index-front_img"
                    src="https://img.freepik.com/foto-gratis/fondo-espacial-polvo-estrellas-estrellas-brillantes-cosmos-colorido-realista-nebulosa-via-lactea_1258-150914.jpg?w=740&t=st=1708265458~exp=1708266058~hmac=50ea48f1e3f374ae2a720b048ccf8f273b7bb1bd0741a09d57f68f843263be12"
                    alt="Image of a Cosmos"
                    />
                </div>
                <div className="Index-paragraph">
                    <h3 className="Index-paragraph_header">
                    Take a close look to the infinitum!</h3>
                    <p className="Index-paragraph_body">Here in Cosmos you will find a galaxy size of products
                    to start your journey to your desired place. You may ask yourself, ¿How?. Well
                    here you will find anything related to your favourites hobbies, games, music, aspirations and
                    likings! And to a wonderful price because of our infinity of companies that work with us.
            
                    We really hope you enjoy it.
                    <h2 className="Index-paragraph_sign"><strong>- Pedro Alfonzo, some random DS3 player.</strong></h2>
                    
                    </p>
                </div>
                
                    <div class="Index-products">
                        {products.map(each=> 
                            <div key={each._id} class="Product">
                                <div class="Product-container">
                                    <img class="Product-container_img" src={each.photo} alt={each.title} />
                                </div>
                                <h5 class="Product-name">{each.title}</h5>
                                <h5 class="Product-price"> ${each.price}</h5>
                            </div>
                        )}
                    </div> 
                
                <span class="Paginate-container">
                    {prev && (
                        <a
                        class="Paginate-prev"
                        href="/?title={{filter}}&page={{prev}}"
                        >
                            PREV
                        </a>
                    )}{" "}
                    {next && (
                    <a
                        class="Paginate-next"
                        href="/?title={{filter}}&page={{next}}"
                    >
                        NEXT
                    </a>
                    )}
                        
                </span> 
            </div>
        </main>
    </>
  )
}

export default LandingPage
