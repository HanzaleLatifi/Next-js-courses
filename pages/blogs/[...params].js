import { useRouter } from "next/router"

function blog() {
    const router=useRouter()
    const{params}=router.query
  return (
    <h2>{params}</h2>
  )
}

export default blog