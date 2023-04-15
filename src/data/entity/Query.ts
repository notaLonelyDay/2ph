

export default interface Query {
    filter_id?: number
    page?: number
    per_page?: number
    q: string
    sd?: string
    sf?: string
}

export const defaultQuery: Query ={
    filter_id: undefined,
    page: undefined,
    per_page: undefined,
    q: "",
    sd: undefined,
    sf: undefined
}
