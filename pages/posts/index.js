import Link from "next/link"

function PostList() {
  return (
    <div>
      <h1>post pages</h1>
      <Link href="/posts/1">
        <a>post 1</a>
      </Link>
      <br/>
      {/* when replace true , href is empty , back to / page when back from page */}
      <Link href="/posts/2" replace>
        <a>post 2</a>
      </Link>
    </div>
  )
}

export default PostList