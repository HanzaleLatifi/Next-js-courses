import { useRouter } from "next/router"

function Post() {
    const router=useRouter()
    const {postId}=router.query
    // postId maybe eveything in [] => [postId]
  return (
    <div>Post {postId}</div>
  )
}

export default Post