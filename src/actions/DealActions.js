import axios from 'axios';

export function receiveDeals(deals) {
  return {
    type: 'RECEIVE_DEALS',
    payload: deals,
  };
}

export function getSampleDeals() {
  return (dispatch) => {
    axios.get('/api/deals/New%20York/new%20york%20city')
      .then(res => res.data)
      .then(deals => dispatch(receiveDeals(deals)))
      .catch(console.error);
  };
}
