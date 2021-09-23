import '../App.css';

import {useEffect, useState} from "react";
import {sortByDateOfPublication, sortByDomain, sortByTitle} from "../SortingMethods/sorting";
import {newsApi} from "../API/api";
import Button from "./Button";


const News = () => {


    let [items, setItems] = useState([])
    let pageNumber = 2;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);


    }, []);

    useEffect(() => {

        newsApi.getNews(1).then(response => {
            setItems([...response.data])

        })
    }, []);


    const getNextPage = () => {

        newsApi.getNews(pageNumber).then(response => {
            setItems(prevItems => [...prevItems, ...response.data])
            pageNumber++
        })

        console.log(pageNumber)
    }


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || pageNumber > 10) return;

        getNextPage()
    }

    let onTitleClick = () => {

        sortByTitle(items)
        setItems(prevItems => [...prevItems])

    }
    let onTimeClick = () => {

        sortByDateOfPublication(items)
        setItems(prevItems => [...prevItems])

    }

    let onDomainClick = () => {

        sortByDomain(items)
        setItems(prevItems => [...prevItems])

    }
    return (
        <div className="App">

            <Button onTimeClick={onTimeClick}/>

            <table>

                <tr>
                    <th className="delete" onClick={onTimeClick}>Time added</th>
                    <th onClick={onTitleClick}>Title</th>
                    <th className="delete" onClick={onDomainClick}>Domain</th>
                </tr>
                {
                    items.map(el =>
                        (

                            <tr>

                                <td className="delete"><a
                                    href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md">{el.time_ago}</a>
                                </td>
                                <td><a
                                    href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md">
                                    <div className="td">
                                        {el.title}
                                    </div>
                                </a>
                                </td>

                                <td className="delete"><a
                                    href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md">{el.domain}
                                </a></td>

                            </tr>


                        )
                    )
                }

            </table>
        </div>
    );
}

export default News;
