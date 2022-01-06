import Layout from "components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout className="flex items-end space-x-3 justify-center">
      <div className="title">About.</div>
      <Link href="/" passHref>
        <div className="link">home</div>
      </Link>
    </Layout>
  );
}
