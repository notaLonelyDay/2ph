

export default interface Query {
    filter_id?: number
    page: number
    per_page?: number
    q: string
    sd?: string
    sf?: string
    clearScreen: boolean
}

export const defaultQuery: Query ={
    filter_id: undefined,
    page: 1,
    per_page: 50,
    q: "landscape",
    sd: undefined,
    sf: undefined,
    clearScreen: true
}
