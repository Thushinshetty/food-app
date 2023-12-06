import React from 'react'


export default function RestaurantCard(props) {
    
    const {resdata} = props;

    const {
        cloudinaryImageId,name,avgRating,cuisines
    } = resdata?.info
    return(
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt=' food' /> 
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
         
        </div>
    );
};

export const withPromotedlabel = (RestaurantCard) =>{
    return (props) => {
        return <div className='card-container'>
            <label className='open-label'>open</label>
            <RestaurantCard {...props}/>
        </div>
    }
}
