import React, { useState, useEffect } from 'react'
import {createRoot} from 'react-dom/client'
import Markdown  from "react-markdown"

export default function Home() {
/*     const file_name = 'testmd.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`/C:/Users/jason/colaman120.github.io/src/posts/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <h1>
            <Markdown>
                {post}
            </Markdown>
        </h1>
    ); */
    const markdown = '#test'
    return(
        <h1>
            <Markdown>{markdown}</Markdown>
        </h1>    
    )
}