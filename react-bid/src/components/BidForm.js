import React from 'react';
function BidForm(props) {
  const {onSubmit = () =>{}} = props;
  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;
    const formData = new FormData(currentTarget);
    onSubmit({
      value: formData.get('value')
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='value'>New Bids</label> <br />
        <input id='value' name='value' />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  )
}
export default BidForm;
