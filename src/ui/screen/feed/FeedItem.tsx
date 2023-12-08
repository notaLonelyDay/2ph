import * as React from 'react';
import ImageComponent from "../../component/image/ImageComponent";
import Image from "../../../data/entity/Image";
import {TagsComponent} from "../../component/image/TagsComponent";

type FeedItemProps = {
    image: Image
};

export function FeedItem({image}: FeedItemProps) {
    return (
        <div>
            <ImageComponent image={image}/>
            <TagsComponent tags={image.tags}/>

            {
                image.description &&
                <div>
                    Description: {image.description}
                </div>
            }

            {
                image.source_url &&
                <div>
                    Source: <a href={image.source_url} target="_blank" rel="noreferrer noopener">Source</a>
                </div>
            }
        </div>
    );
};