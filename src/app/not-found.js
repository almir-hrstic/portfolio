import Container from "../components/container"
import Error404 from '../components/error-404'

export const metadata = { title: 'Page not found' }

export default function NotFound() {

  return (

    <Container>
      <Error404 />
    </Container>
  )
}
