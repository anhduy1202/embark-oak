"use client"
import LandingPage from "@/components/LandingPage/page";
import { useEffect, useState } from "react";
import { getProductsByCategory, getPageData, getProducts } from "./action";
import { BannerDataType, CategoriesBannerDataType, productType } from "@/lib/interface";
import Loading from "@/components/Button/Loading";

export default function Home() {
  const [banner, setBanner] = useState<BannerDataType>({ title: "", image: "" })
  const [categories, setCategories] = useState<CategoriesBannerDataType[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<productType[]>([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getPageData("home")
      const products = await getProductsByCategory("featured");
      setBanner(data.bannerData)
      setCategories(data.categoriesObject)
      setFeaturedProducts(products)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <LandingPage bannerData={banner} categoriesData={categories} featuredProducts={featuredProducts} />
      )}
    </main>
  );
}
