import * as React from 'react';

type TagsProps = {
    tags: string[]
};

export function TagsComponent({tags}: TagsProps) {
    return (
        <div className="d-flex flex-wrap h-auto">
            {
                tags.map((item, idx) => (
                    <div className="p-1">
                        {item}
                    </div>
                ))
            }
        </div>
    );
};