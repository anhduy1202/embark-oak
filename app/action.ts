"use server";
import { defineOneEntry } from 'oneentry'
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
        title: value.attributeValues?.maintitle.value[0].header,
        image: value.attributeValues?.mainimage.value[0].downloadLink
    }
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
    return {bannerData, categoriesObject}
}

// export async function getAttributeSets(marker:string) {
//     const value = await AttributesSets.getAttributesByMarker(marker, 'en_US')
//     return value
// }