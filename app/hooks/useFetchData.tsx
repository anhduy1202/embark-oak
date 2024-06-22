'use client'
import { useState, useEffect, useCallback } from 'react';
import { getPageData, getProductsByCategory } from '../action';
import { BannerDataType, CategoriesBannerDataType, productType } from '@/lib/interface';

const useFetchData = ({ url = "", categoryUrl = "", fetchBanner = false, fetchCategories = false }) => {
    const [products, setProducts] = useState<productType[]>([])
    const [banner, setBanner] = useState<BannerDataType>({ title: "", image: "" });
    const [categories, setCategories] = useState<CategoriesBannerDataType[]>([]);
    const [isLoading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getPageData(url);
            if (categoryUrl != "") {
                const products = await getProductsByCategory(categoryUrl);
                setProducts(products);
            }
            if (fetchBanner) setBanner(data.bannerData);
            if (fetchCategories) setCategories(data.categoriesObject);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [url, fetchBanner, fetchCategories]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { banner, categories, isLoading, products };
};

export default useFetchData;
