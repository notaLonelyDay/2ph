import React, {useEffect, useMemo, useState} from 'react';
import FeaturedResponse from "./data/network/response/FeaturedResponse";
import NetworkDataSourceImpl from "./data/network/datasource/NetworkDataSourceImpl";
import Search from "./ui/component/search/Search";
import Query, {defaultQuery} from "./data/entity/Query";
import Image from "./data/entity/Image";
import {useDebounce} from "use-debounce";

function App() {

    const [data, setData] = useState<Image | undefined>()
    const [query, setQuery] = useState<Query>(defaultQuery)
    const [debouncedQuery] = useDebounce(query, 1000)

    const networkDataSource = useMemo(() => {
        return new NetworkDataSourceImpl()
    }, [])



    useEffect(() => {
        async function fetchData() {
            const featuredResponse = await networkDataSource.searchImages(debouncedQuery);
            setData(featuredResponse.images[0])
        }

        fetchData()
    }, [networkDataSource, debouncedQuery])

    return (
        <div className="App">
            <Search setQuery={setQuery} query={query}/>

            <img src={data !== undefined ? data.representations.full : ""}/>

        </div>
    );
}

export default App;
