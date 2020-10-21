let nextTodoId = 0
export const addToCart = item => ({
  type: 'ADD_TO_CART',
  count: nextTodoId++,
  item:item
})
