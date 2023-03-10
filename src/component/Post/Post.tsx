import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post(){

  const params: any= useParams();

  const [post, setPost] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url :string = `https://blog-data-r5ix.onrender.com/blog/${params.title}`
    axios.get(url)
        .then(res => {
          setPost(res.data.data)
          setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
  }, [params.title]);

  if (loading) {
    return <p className='mx-8 md:ml-24'>loading</p>
  }

  return (
    <>
      <Card className='mx-8 md:ml-24 md:mr-8 mb-8'>
          <CardHeader 
                title= {post.title} subheader= {post.category} className='bg-sky-100'/>
          <CardContent>
          <Typography component={'div'}>
              {post.content.split("\n").map((text:any, index:any) => <div key={index} className='text-lg'>{text}</div>)}
          </Typography> 
      </CardContent>
      </Card>
    </>
  )
}