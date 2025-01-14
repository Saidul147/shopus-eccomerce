
let cartName  = "cartItems"

export const getLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem(cartName)) || []

    return data
}

export const setLocalStorage = (cart) => {
   return localStorage.setItem(cartName,JSON.stringify(cart))
}
