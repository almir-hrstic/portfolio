import Container from "../components/container"
import Error404 from '../components/error-404'

export const generateMetadata = async () => {

  let data = await fetch(`${process.env.BASE_URL}/404-meta.json`).then(response => response.json())
  
  return data
}

export default function NotFound() {

  return (

    <Container>
      <Error404 />
    </Container>
  )
}
