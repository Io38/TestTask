
export const sortByTitle = (arr) =>{

    arr.sort((ob1, ob2) => ob1.title > ob2.title ? 1 : -1);
}

export const sortByDateOfPublication = (arr) =>{

    arr.sort((ob1, ob2) => ob1.time < ob2.time ? 1 : -1);
}

export const sortByDomain = (arr) =>{

    arr.sort((ob1, ob2) => ob1.domain > ob2.domain ? 1 : -1);
}

