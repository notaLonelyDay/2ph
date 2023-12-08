// @flow
import * as React from 'react';
import SearchComponent from "../../component/search/SearchComponent";
import {useEffect, useMemo, useState} from "react";
import Image from "../../../data/entity/Image";
import Query, {defaultQuery} from "../../../data/entity/Query";
import {useDebounce} from "use-debounce";
import NetworkDataSourceImpl from "../../../data/network/datasource/NetworkDataSourceImpl";
import InfiniteScroll from "react-infinite-scroll-component";
import {FeedItem} from './FeedItem';

type FeedScreenProps = {};


export function FeedScreen(props: FeedScreenProps) {

    const [images, setImages] = useState<Image[]>([])

    const [query, setQuery] = useState<Query>(defaultQuery)
    const [hasMore, setHasMore] = useState(true)
    const [debouncedQuery] = useDebounce(query, 1000)

    const networkDataSource = useMemo(() => {
        return new NetworkDataSourceImpl()
    }, [])


    useEffect(() => {
        async function fetchData() {
            const response = await networkDataSource.searchImages(debouncedQuery);

            if (debouncedQuery.clearScreen) {
                setHasMore(true)
                setImages(response.images)
            } else {
                setImages([...images, ...response.images])
            }
            setHasMore(response.images.length != 0)
        }

        fetchData()
    }, [debouncedQuery])

    function updatePage() {
        setQuery(
            {
                ...query,
                page: (query.page + 1),
                clearScreen: false
            }
        )
    }

    return (
        <div>
            <SearchComponent setQuery={setQuery} query={query}/>
            <InfiniteScroll
                next={updatePage}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={
                    <p>Finish</p>
                }
                dataLength={images.length}>
                {images.map((item, index) => (
                    <div key={index}>
                        <FeedItem image={item}/>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};