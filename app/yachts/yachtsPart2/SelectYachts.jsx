import React from 'react'
import MediaCard from '../../standard/CardYacht'
import BasicCard from '../../standard/BasicCard'
import { img14, img8,img15, img16,img17,img18} from '../../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <BasicCard mainImg={img14} name="101ft Majesty" rooms="4" price="From 2400 AED /Hour" link="/premium/101ft"/>
            <BasicCard mainImg={img8} name="44ft Majesty" rooms="3" price="From 550 AED /Hour" link="/standard/44ft"/>
            <BasicCard mainImg={img15} name="82ft SanLorenzo" rooms="3" price="From 2000 AED /Hour" link="/premium/82ft"/>
            <BasicCard mainImg={img16} name="68ft Azimut" rooms="3" price="From 1200 AED /Hour" link="/premium/68ft"/>
            <BasicCard mainImg={img17} name="62ft Lucky Star" rooms="3" price="From 1100 AED /Hour" link="/premium/62ft_star"/>
            <BasicCard mainImg={img18} name="62ft Freedom" rooms="3" price="From 950 AED /Hour" link="/premium/62ft"/>
        </div> 
    </div>
  )
}

export default SelectYachts