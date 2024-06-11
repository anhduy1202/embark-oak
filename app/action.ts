"use server";
import { productType } from '@/lib/interface';
import { defineOneEntry } from 'oneentry'
import { IProductsEntity, IProductsQuery } from 'oneentry/dist/products/productsInterfaces';
const {
    Admins,
    AttributesSets,
    Blocks,
    Forms,
    FormData,
    FileUploading,
    GeneralTypes,
    Locales,
    Menus,
    Pages,
    Products,
    ProductStatuses,
    System,
    Templates,
    TemplatePreviews
} = defineOneEntry('https://embarkoak.oneentry.cloud', { token: process.env.ONEENTRY_TOKEN, langCode: 'en' })

export async function getPageData(url: string) {
    // Get all data from a page
    const value = await Pages.getPageByUrl(url, 'en_US')
    const bannerData = {
        title: value.attributeValues?.maintitle.value,
        image: value.attributeValues?.mainimage.value[0].downloadLink
    }
    if (value.attributeValues?.hasOwnProperty('categoriestitle') && value.attributeValues?.categoriestitle.value != '') {
        const categoriesData = {
            titles: value.attributeValues?.categoriestitle.value.split(","),
            images: value.attributeValues?.categoriesimage.value.map((item: any) => item.downloadLink),
            links: value.attributeValues?.categorieslink.value.split(",")
        }
        const categoriesObject = categoriesData.titles.map((title: string, index: any) => ({
            id: "cate" + title,
            title: title.toLocaleUpperCase(),
            imgSrc: categoriesData.images[index],
            url: categoriesData.links[index]
        }));
        return { bannerData, categoriesObject }
    }
    return { bannerData }
}

// helper function to parse
const parseProductObject = (value: any) => {
    const products: any = value.map((product: IProductsEntity) => ({
        id: product.id,
        src: product.attributeValues.images.value[0].downloadLink,
        title: product.attributeValues.title.value,
        price: product.attributeValues.price.value,
        quantity: product.attributeValues.quantity.value,
        description: product.attributeValues.description.value,
        images: product.attributeValues.images.value.map((v: any) => v.downloadLink),
        categories: product.attributeValues.categories.value.split(",")
    }))
    // remove duplicates
    const uniqueProducts = Array.from(new Map(products.map((item: IProductsEntity) => [item.id, item])).values());
    return uniqueProducts
}
export async function getProductsByCategory(category: string) {
    const body = [
        {
            "attributeMarker": "price",
            "conditionMarker": "mth",
            "conditionValue": 1,
        }
    ]
    const value = await Products.getProductsByPageUrl(category, body, 'en_US')
    const products = parseProductObject(value)
    return products
}

export async function getProductbyID(id: number) {
    const value = await Products.getProductById(id, 'en_US')
    const products = parseProductObject([value])
    return products
}

