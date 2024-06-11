"use client"
import LandingPage from "@/components/LandingPage/page";
import Loading from "@/components/Button/Loading";
import useFetchData from "./hooks/useFetchData";

export default function Home() {
  const {banner, categories, isLoading, products} = useFetchData({url:"home", categoryUrl:"featured", fetchBanner: true, fetchCategories: true})
  console.log("Hi, " + categories)
  return (
    <main className="flex min-h-screen flex-col items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <LandingPage bannerData={banner} categoriesData={categories} featuredProducts={products} />
      )}
    </main>
  );
}
