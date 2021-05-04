import React from 'react'
import OfferData from './Offers/OfferData';
import OfferItem from './Offers/OfferItem';
import "../styles/Offers.css";

class Offers extends React.Component{
    constructor(){
      super();
      this.state ={
          jobOffers: OfferData
       }
    }
    render(){
      const jobComponent = this.state.jobOffers.map(offer => <OfferItem key={offer.id} offer={offer} />)
      return(
        <div className="offer">
          <div className="offer__head">
              <h2 className='offer__head1'>Newest Job Offers</h2>
              <p className='offer__head2'>View all job offers &rarr</p>
            </div>
          <div className='offer__content'>{jobComponent}</div>
        </div>
      )
    }
  }
  export default Offers;
