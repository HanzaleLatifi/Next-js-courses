import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>Page is not Found</h1>
      <Link href="/">
        <a>go to home Page</a>
      </Link>
    </div>
  );
}

export default NotFound;
