import React, {Component} from 'react';
import {Auction} from '../../utilities/requests';
import AuctionList from '../AuctionList'

class AuctionsIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      auctions: []
    };
  }

  // 👇 Lifecycle callback that will run once the
  // component is first rendered in the browser.
  componentWillMount () {
    Auction
      .getAll()
      .then(auctions => this.setState({auctions}))
      // .then(console.log('a')  );
  }

  render () {
    
    return (
      <div className='AuctionsIndexPage'>
        <h2>Auctions</h2>
        <AuctionList auctions={this.state.auctions} />
      </div>
    );
  }
}

export default AuctionsIndexPage;
