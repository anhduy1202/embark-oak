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
} = defineOneEntry('https://embarkoak.oneentry.cloud', {token: process.env.ONEENTRY_TOKEN, langCode:'en'})

export async function getPageData(url:string)  {
    const value = await Pages.getPageByUrl(url, 'en_US')
    return value
}