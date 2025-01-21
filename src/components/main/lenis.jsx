import { ReactLenis, useLenis } from 'lenis/react'

function Leniscroll({children}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default Leniscroll


