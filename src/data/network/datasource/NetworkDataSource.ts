import FeaturedResponse from "../response/FeaturedResponse";
import SearchImagesResponse from "../response/SearchImagesResponse";
import Query from "../../entity/Query";


export default interface NetworkDataSource {
    getFeatured():  Promise<FeaturedResponse>
    searchImages(query: Query): Promise<SearchImagesResponse>
}

