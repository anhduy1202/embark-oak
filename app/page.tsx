"use client"
import LandingPage from "@/components/LandingPage/page";
import { useEffect } from "react";
import { getPageData } from "./action";

export default function Home() {
  useEffect(()=>{
    const getData = async ()=>{
      const data = await getPageData("home")
      console.log(data)
    }
    getData()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage />
    </main>
  );
}
