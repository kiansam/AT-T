import Head from "next/head";
import Image from "next/image";
import BottomNav from "../components/BottomNav";
import TopNavbar from "../components/TopNavbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>AT&T</title>
        <meta name="AT&T" content="AT&T" />
      </Head>
      <TopNavbar />
      <BottomNav />
    </div>
  );
}
