import Container from "../components/container"
import Error404 from '../components/error-404'

export const generateMetadata = async () => {

  return await fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())
}


export default function NotFound() {

  return (

    <Container>
      <Error404 />
    </Container>
  )
}
