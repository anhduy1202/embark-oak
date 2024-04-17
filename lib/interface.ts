
export interface MenuItemType {
    id: string,
    title: string,
    url: string
}
export interface productType {
    id: string,
    src: string,
    title: string,
    price: string,
    quantity: number,
    description?: string,
    images?: string[] | any, 
    categories: string[]
}

export interface LabelCardType {
    id: string,
    title: string,
    imgSrc: string,
    url: string
}