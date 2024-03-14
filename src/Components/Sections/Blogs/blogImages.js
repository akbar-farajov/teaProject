function getImageUrl(name) {
    return new URL(`../../../../public/blog-images/${name}`, import.meta.url);
}

export  {getImageUrl} ;
