import Link from "next/link";
import Header from "../components/Header";

const Index = () => (
  <div>
    <Header />
    <Link href="/about">
      <a style={{ fontSize: 20 }}>About Page</a>
    </Link>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p> Hello World </p>
  </div>
);

export default Index;
