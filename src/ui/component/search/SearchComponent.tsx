import React, {ChangeEvent} from 'react';
import Query from "../../../data/entity/Query";

const SearchComponent = ({query, setQuery}: SearchProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const queryString = e.target.value;
        const newQuery: Query = {
            ...query,
            q: queryString,
            page: 1,
            clearScreen: true
        }
        setQuery(newQuery)
    }

    return (
        <div>
            <input value={query.q} onChange={onChange}/>
        </div>
    );
};

interface SearchProps {
    query: Query

    setQuery(query: Query): void
}

export default SearchComponent;