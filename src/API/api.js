import * as axios from 'axios'


const instance = axios.create(
    {
baseURL:"https://api.hnpwa.com/v0/"
    }
);

export const newsApi ={

    getNews(pageNumber){
       return instance.get(`news/${pageNumber}.json`)
    }

}
export const newestApi ={

    getNewest(pageNumber){
       return instance.get(`newest/${pageNumber}.json`)
    }

}