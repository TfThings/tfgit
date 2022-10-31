import React from 'react'

const ServiceCardArray = () => {
  return (
    <div className={`sdm ${index == menuOpen ? 'active' : 'inactive'}`}>
        <ul className='sdmu'>
        {(subCollection).slice(1 ,10).map((place, i) => {
            if(place.contact_website && menuOpen == index)
                {
                return(
                    <ServiceCard place={place} index={i + 1} subString={subCollection[0].collection_type} key={i}/>
                    )
                }
                })}
            <button className='sdbb' onClick={() => setOpen(menuOpen == index ? 0 : index)}>
            {menuOpen == index ? "Show Less" : "View Companies"}</button>
        </ul>
    </div>
  )
}

export default ServiceCardArray