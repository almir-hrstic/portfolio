import Container from "../components/container"
import Error404 from '../components/error-404'

export const generateMetadata = async () => {

  const data = await fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())

  return { title: data.title }
}

export default function NotFound() {

  return (

    <Container>
      <Error404 />
    </Container>
  )
}
