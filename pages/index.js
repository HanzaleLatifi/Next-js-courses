import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>this is my Home page</h1>
      <Link href="/posts">
        <a>go to post page</a>
      </Link>
    </div>
  );
}
