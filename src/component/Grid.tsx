import { useParams } from "react-router-dom";
import Categories from "./Category/Categories";
import Category from "./Category/Category";
import PostBlock from "./Post/PostBlock";
import Post from "./Post/Post";

export default function Grid() {
  const params = useParams();

  let length: number = JSON.stringify(params).length
  let Block: any

  if (length === 2){
    Block = <PostBlock/>
  }else if(length < 16){
    Block = <Post/>
  }else{
    Block = <Categories/>
  }

  return (
      <div className="flex flex-col md:flex-row bg-neutral-100">
        <div className="w-full mt-6 md:w-9/12">
          {Block}
        </div>
        <hr></hr>
        <div className="w-full mb-8 mt-6 md:w-3/12">
          <Category/>
        </div>
      </div>
  )
}