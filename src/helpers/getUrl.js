export default function getUrl(path = null) {

  if (!path) return process.env.NODE_ENV !== 'production' ? process.env.BASE_URL : `${process.env.BASE_URL}/`
  else return `${process.env.BASE_URL}/${path}`
}
