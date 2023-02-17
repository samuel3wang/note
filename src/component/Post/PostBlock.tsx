import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Blog{
    title_id: string;
    title: string;
    content: string;
    category: string;
    date: string;
}

export default function PostBlock(){
    const [blogs, setBlogs] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url :string = `https://blog-data-r5ix.onrender.com/blogs`
        axios.get(url)
            .then(res => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    if (loading) {
        return <p className='mx-8 md:ml-24'>loading</p>
    }

    return (
        <>
        {blogs.data.map((data: Blog)=> (
            <Card className='mx-8 md:ml-24 md:mr-8 mb-8' key={data.title_id}>
                <CardHeader 
                    title= {data.title } subheader= {data.category} className="bg-sky-100 text-18"/>
                <CardContent>
                <Typography>
                    {data.content}
                </Typography>
                <Link className="text-neutral-700" to={`/blog/${data.title_id}`} >
                    <p className='font-semibold text-gray-700'>
                        read more
                    </p>
                </Link>
            </CardContent>
            </Card>
        ))}
        </>
    )
}