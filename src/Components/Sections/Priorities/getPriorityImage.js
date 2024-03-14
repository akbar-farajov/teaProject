
 function getPriorityImages(name){
    return new URL(`../../../../public/images/priority-images/${name}`,  import.meta.url)
}

export {getPriorityImages};