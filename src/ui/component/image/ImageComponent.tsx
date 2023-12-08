import React, {ChangeEvent} from 'react';
import Query from "../../../data/entity/Query";
import Image from "../../../data/entity/Image";

const ImageComponent = ({image}: ImageProps) => {

    return (
        <div>
            <img  height={window.innerHeight} src={image.representations.small}/>
        </div>
    );
};

interface ImageProps {
    image: Image
}

export default ImageComponent;