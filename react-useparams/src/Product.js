import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {

    const {pradeepCategory} = useParams()
    console.log('current path is :',pradeepCategory)

    const [finalProduct, setFinalProduct] = useState(null)

    const ecommerceProducts = [
        {
            title: 'Mens Shirt',
            category: 'men'
        },
        {
            title: 'Mens T-Shirt',
            category: 'men'
        },
        {
            title: 'Mens Shirt',
            category: 'men'
        },
        {
            title: 'Mens T-Shirt',
            category: 'men'
        },
        {
            title: 'Womens Shirt',
            category: 'women'
        },
        {
            title: 'Womens T-Shirt',
            category: 'women'
        },
        {
            title: 'Kids Shirt',
            category: 'kids'
        },
        {
            title: 'Kids T-Shirt',
            category: 'kids'
        },
    ]




    useEffect(()=>{
        if(pradeepCategory){
            const filteredProducts = ecommerceProducts.filter(item=>item.category===pradeepCategory)
            console.log('Filtered Products are: ',filteredProducts)
            setFinalProduct(filteredProducts)
        }
    },[pradeepCategory])


    if(finalProduct===null){
        return (
            <div>
              No Products available
            </div>
          )
    }
    else{
        return(
            <div>
                <img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/10/29/cdf3c232-c1d7-42f8-9198-a199d40e754e1730143733621-MYNTRA100.jpg" />
                {finalProduct.map((productItem, index)=>{
                    return(
                        <div key={index}>
                            <h1>Product Title: {productItem.title}</h1>
                            <p>Product Category: {productItem.category}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Product
