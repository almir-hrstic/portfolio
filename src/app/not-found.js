import Container from "../components/container"
import Error404 from '../components/error-404'

export const generateMetadata = async () => {

  let data = await fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())

  return { ...data, title: data.not_found }
}

export default function NotFound() {

  return (

    <Container>
      <Error404 />
    </Container>
  )
}
