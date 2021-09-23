import React, {useEffect, useState} from "react";

import {sortByDateOfPublication, sortByDomain, sortByTitle} from "../SortingMethods/sorting";
import '../App.css';
import {newestApi} from "../API/api";
import Button from "./Button";

let Newest = () => {

    let [items, setItems] = useState([])
    let pageNumber = 2;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);


    }, []);

    useEffect(() => {

        newestApi.getNewest(1).then(response => {
            setItems([...response.data])

        })
    }, []);


    const getNextPage = () => {

        newestApi.getNewest(pageNumber).then(response => {
            setItems(prevItems => [...prevItems, ...response.data])
            pageNumber++
        })

        console.log(pageNumber)
    }


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || pageNumber > 12) return;

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
                    <th  onClick={onTitleClick}>Title</th>
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
                                    href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md">{el.title}</a>
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
export default Newest