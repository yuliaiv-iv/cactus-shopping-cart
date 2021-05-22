export const getData = () => {
  return fetch('https://shopping-cart-be698-default-rtdb.firebaseio.com/cactuses.json')
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`${res.status}`);
    })
}

export const postData = (userData, cartCtx) => {
  return fetch('https://shopping-cart-be698-default-rtdb.firebaseio.com/orders.json', {
    method: 'POST',
    body: JSON.stringify({
      user: userData,
      orderItems: cartCtx.items
    })
  })
}