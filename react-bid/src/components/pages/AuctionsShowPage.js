import React, {Component} from 'react';
import {Auction} from '../../utilities/requests';
import AuctionDetails from '../AuctionDetails';
import BidForm from '../BidForm'
class AuctionsShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      auction: {}
    };

    this.createBid = this.createBid.bind(this)
  }

  createBid (bid) {

    const auctionId = this.state.auction.id
    Auction.
      bidPost(bid,auctionId)
      .then((bid) => {
        // console.log(bid);
        this.state.auction.bids.push(bid)
        this.setState({auction: this.state.auction});

          // console.log(this.state.auction.bids.push(bid));

      });
      //  this.props.history.push(`/auctions/${auctionId}/bids`))
      // .then(window.location.reload())
  }


  componentDidMount () {
    const {id} = this.props.match.params;
    // const id = 30
    Auction
      .get(id)
      .then(auction => this.setState({auction}));
  }

  render () {
    return (
      <div className='AuctionsShowPage'>
        <AuctionDetails {...this.state.auction} />
        <BidForm onSubmit={this.createBid} />

      </div>
    );
  }
}

export default AuctionsShowPage;
