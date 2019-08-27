import React from 'react'
import SHOP_DATA from './shop.data'
import ColectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component{

    state={ 
        collections: SHOP_DATA
    }

    render(){
        const {collections}= this.state
        return(
            <div className="shop-page">
              {
                  collections.map(({id,...otherCollectionsProps})=>(
                      <ColectionPreview key={id} {...otherCollectionsProps} ></ColectionPreview>
                  ))
              }
            </div>
        )
    }
}

export default ShopPage