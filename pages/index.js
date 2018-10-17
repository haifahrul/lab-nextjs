import Link from "next/link";
import Layout from "../components/MyLayout.js";

const Index = () => (
  <Layout>
    <Link href="/about">
      <a style={{ fontSize: 20 }}>About Page</a>
    </Link>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p> Hello World </p>
  </Layout>
);

export default Index;
