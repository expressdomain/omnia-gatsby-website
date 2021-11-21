import { v4 } from 'uuid'
import { isEmpty, remove } from 'lodash'
import DOMPurify from 'dompurify'
import blog_placeholder from '../images/featured_blog_placeholder.png'

export const normalizePath = (path) => {
  const pathStr = path.split('/')

  // If the path ends with '/' get the second last item
  if (path?.endsWith(`/`)) {
    const strIndex = pathStr.length ? pathStr.length - 2 : ''

    if (strIndex) {
      path = `/${pathStr[strIndex]}/`
    }
  }

  // If the path ends with '/' get the second last item.
  if (!path?.endsWith(`/`)) {
    const strIndex = pathStr.length ? pathStr.length - 1 : ''

    if (strIndex) {
      path = `/${pathStr[strIndex]}/`
    }
  }

  return path
}
/**
 * Get date in format of m-d-y
 *
 * @param {string} dateString Date string, example 2020-05-03T04:41:12
 *
 * @return {string}
 */
export const getFormattedDate = (dateString) => {
  if (!dateString) {
    return ''
  }

  const date = new Date(dateString)

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */
export const getFloatVal = (string) => {
  let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0]
  return null !== floatValue ? parseFloat(parseFloat(floatValue).toFixed(2)) : ''
}

/**
 * Create a new product object.
 *
 * @param {Object} product Product
 * @param {Integer} productPrice Product Price
 * @param {Integer} qty Quantity
 * @return {{image: *, productId: *, totalPrice: number, price: *, qty: *, name: *}}
 */
export const createNewProduct = (product, productPrice, qty) => {
  return {
    productId: product.productId,
    image: product.image,
    name: product.name,
    price: productPrice,
    qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2)),
  }
}

export const isUserLoggedIn = () => {
  let authData = null

  if (process.browser) {
    authData = JSON.parse(localStorage.getItem('auth'))
  }
  return authData
}

export const logOut = () => {
  localStorage.removeItem('auth')
}

export const setAuth = (authData) => {
  localStorage.setItem('auth', JSON.stringify(authData))
}

/**
 * Check if user is logged in.
 *
 * @return {object} Auth Object containing token and user data, false on failure.
 */
export const isUserValidated = () => {
  let userLoggedInData = ''

  if (process.browser) {
    let authTokenData = localStorage.getItem('auth')

    if (!isEmpty(authTokenData)) {
      authTokenData = JSON.parse(authTokenData)

      if (!isEmpty(authTokenData.authToken)) {
        userLoggedInData = authTokenData
      }
    }
  }

  return userLoggedInData
}

/**
 * Function to get opengraph image.
 *
 * @param {Object} seo Seo data.
 *
 * @return {void}
 */
export const getOgImage = (seo) => {
  if (isEmpty(seo) || isEmpty(seo.opengraphImage) || isEmpty(seo.opengraphImage.sourceUrl)) {
    return getDefaultOgImage(seo)
  }

  return seo.opengraphImage.sourceUrl
}

/**
 * Function to get opengraph default image.
 *
 * @param {Object} seo Seo data.
 *
 * @return {void}
 */
export const getDefaultOgImage = (seo) => {
  if (
    isEmpty(seo) ||
    isEmpty(seo.social) ||
    isEmpty(seo.social.facebook) ||
    isEmpty(seo.social.facebook.defaultImage) ||
    isEmpty(seo.social.facebook.defaultImage.sourceUrl)
  ) {
    return ''
  }

  return seo.social.facebook.defaultImage.sourceUrl
}

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  return process.browser ? DOMPurify.sanitize(content) : content
}
