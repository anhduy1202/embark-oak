"use client"
import LandingPage from "@/components/LandingPage/page";
import { useEffect, useState } from "react";
import { getPageData } from "./action";
import { BannerDataType, CategoriesBannerDataType } from "@/lib/interface";

export default function Home() {
  const [banner, setBanner] = useState<BannerDataType>({title: "", image: ""})
  const [categories, setCategories] = useState<CategoriesBannerDataType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const data = await getPageData("home")
      setBanner(data.bannerData)
      setCategories(data.categoriesObject)
    }
    getData()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage bannerData={banner} categoriesData={categories}/>
    </main>
  );
}
