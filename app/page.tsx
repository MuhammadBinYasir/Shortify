import Card from "@/components/Dashboard/Card";
import Link from "next/link";
import { ImLink } from "react-icons/im";
import { IoEyeOutline, IoRocketOutline, IoAddOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

export default async function Home() {

  return (
    <>
      <h4 className="text-lg mb-6 text-slate-700 font-medium">Dashboard</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 text-slate-700">
        <Card title="Created Links" count={69} Icon={ImLink} bg="sky" />
        <Card title="Total Views" count={2800} Icon={IoEyeOutline} bg="orange" />
        <Card title="Best Performing" count={780} desc="myurl.co/abcxyz" Icon={IoRocketOutline} bg="emerald" />
        <Card title="Avg. Clicks" count={75} Icon={TfiStatsUp} bg="purple" />

      </div>

      <div className="grid grid-cols-4 gap-5 text-slate-700 mt-5 items-stretch overflow-hidden">
        <div className="col-span-4 md:col-span-3 bg-white p-5 rounded border border-slate-100 overflow-hidden">
          <div className="md:min-w-0 md:overflow-hidden min-w-[600px] overflow-x-scroll">
            <h4 className="text-base text-slate-700 font-medium flex items-center gap-3"><TfiStatsUp /> Top Shortened URL's</h4>
            <div className="w-full border border-slate-100 mt-3">
              <div className="grid grid-cols-3 px-2 py-3 bg-slate-50">
                <h3 className="text-sm font-bold">Shorten URL</h3>
                <h3 className="text-sm font-bold">Original URL</h3>
                <h3 className="text-sm font-bold">Counted Clicks</h3>
              </div>
              <div className="grid grid-cols-3 px-2 py-3">
                <h3 className="text-sm font-normal">https://youtube.com</h3>
                <h3 className="text-sm font-normal">https://myurl.co/abcxyz</h3>
                <h3 className="text-sm font-normal">3.2K</h3>
              </div>
              <div className="grid grid-cols-3 px-2 py-3">
                <h3 className="text-sm font-normal">https://youtube.com</h3>
                <h3 className="text-sm font-normal">https://myurl.co/abcxyz</h3>
                <h3 className="text-sm font-normal">3.2K</h3>
              </div>
              <div className="grid grid-cols-3 px-2 py-3">
                <h3 className="text-sm font-normal">https://youtube.com</h3>
                <h3 className="text-sm font-normal">https://myurl.co/abcxyz</h3>
                <h3 className="text-sm font-normal">3.2K</h3>
              </div>
              <div className="grid grid-cols-3 px-2 py-3">
                <h3 className="text-sm font-normal">https://youtube.com</h3>
                <h3 className="text-sm font-normal">https://myurl.co/abcxyz</h3>
                <h3 className="text-sm font-normal">3.2K</h3>
              </div>
              <div className="grid grid-cols-3 px-2 py-3">
                <h3 className="text-sm font-normal">https://youtube.com</h3>
                <h3 className="text-sm font-normal">https://myurl.co/abcxyz</h3>
                <h3 className="text-sm font-normal">3.2K</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 rounded hidden md:flex justify-center flex-col px-6 bg-gradient-to-br from-slate-500 to-slate-700">
          <h4 className="text-base text-white font-bold">Create a New Short URL!</h4>
          <p className="mt-1 text-neutral-200 font-normal text-sm">Just click the button below to start creating your new short url.</p>
          <Link href="/" className="mt-5 w-1/2 h-10 bg-slate-300 rounded text-slate-950 flex items-center justify-center text-sm ml-0">Click Here</Link>
        </div>
      </div>
    </>
  );
}
