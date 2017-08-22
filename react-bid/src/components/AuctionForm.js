import React from 'react';

function AuctionForm (props) {
  // By taking a `onSubmit` prop, I'm effectively going
  // to implement a "event" for when QuestionForm is submitted
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      title: formData.get('title'),
      body: formData.get('body'),
      rprice: formData.get('rprice')
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label> <br />
        <textarea id='body' name='body' />
      </div>
      <div>
        <label htmlFor='rprice'>Reserve Price</label> <br />
        <textarea id='rprice' name='rprice' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
}

export default AuctionForm;
