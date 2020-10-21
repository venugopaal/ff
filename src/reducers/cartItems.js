const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          item: action.item,
          count: action.count,
        }
      ]
    case 'DELETE_TO_CART':
    return [
      ...state,
      {
        item: action.item,
        count: action.count,
      }
    ]
    default:
      return state
  }
}

export default cart;
