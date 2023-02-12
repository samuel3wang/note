import { Card, CardHeader, CardContent } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

export default function Categories(){
    const [title, setTitle] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    
    const params = useParams();
    const topic : string = JSON.stringify(params.category)?.slice(1, -1);

    useEffect(() => {
        let url :string = `https://blog-data-r5ix.onrender.com/category/${params.category}`
        axios.get(url)
            .then(res => {
                setTitle(res.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [params.category]);
    
    if (loading) {
        return <p>loading</p>
    }

    return (
        <>
            <Card className='mb-12 mx-28'>
                <CardHeader title= {`${topic}`} className='bg-sky-100'/>
                <CardContent>
                    {title.map((item: any) => (
                        <p key={item.title} className="text-2xl">
                            <Link className="text-neutral-700" to={`/blog/${item.title_id}`}>
                                {item.title}
                            </Link>
                        </p>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}