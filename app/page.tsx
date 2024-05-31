"use client"
import LandingPage from "@/components/LandingPage/page";
import { useEffect, useState } from "react";
import { getFeaturedProducts, getPageData, getProducts } from "./action";
import { BannerDataType, CategoriesBannerDataType, productType } from "@/lib/interface";

export default function Home() {
  const [banner, setBanner] = useState<BannerDataType>({title: "", image: ""})
  const [categories, setCategories] = useState<CategoriesBannerDataType[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<productType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const data = await getPageData("home")
      const products = await getFeaturedProducts();
      setBanner(data.bannerData)
      setCategories(data.categoriesObject)
      setFeaturedProducts(products)
    }
    getData()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage bannerData={banner} categoriesData={categories} featuredProducts={featuredProducts}/>
    </main>
  );
}
