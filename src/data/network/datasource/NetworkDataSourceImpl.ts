import FeaturedResponse from "../response/FeaturedResponse";
import NetworkDataSource from "./NetworkDataSource";
import axios from "axios";
import Query from "../../entity/Query";
import SearchImagesResponse from "../response/SearchImagesResponse";

export default class NetworkDataSourceImpl implements NetworkDataSource {
    getFeatured(): Promise<FeaturedResponse> {
        const response = axios.get(this.constructUrl("images/featured"));
        return response.then(response => response.data)
    }

    searchImages(query: Query): Promise<SearchImagesResponse>{
        const response = axios.get(
            this.constructUrl("search/images"),
            {
                params: query
            }
        );
        return response.then(response => response.data)
    }

    private constructUrl(path: string) {

        return `https://derpibooru.org/api/v1/json/${path}`
    }

}