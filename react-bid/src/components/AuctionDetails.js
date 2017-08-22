import React from 'react';

function AuctionDetails (props) {
  const {id, title, body, rprice, bids = [], user = {}} = props;

  return (
    <div className='AuctionDetails'>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Reserve Price ${rprice}</p>
      <p><em>By {user.first_name} {user.last_name}</em></p>
      <h3>Bids</h3>
      <ul className='BidList'>
        {
          bids.map(
            bid => (
              <li key={bid.id}>
                ${bid.value} at {(new Date(Date.parse(bid.created_at))).toLocaleString()}
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default AuctionDetails;
