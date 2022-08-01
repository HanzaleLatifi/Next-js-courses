import { useRouter } from "next/router"

function Review() {
    const router=useRouter()
    const{postId,reviewId}=router.query
  return (
    <h1>Review{reviewId} from post{postId}</h1>
  )
}

export default Review