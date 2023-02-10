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
    <div className="bg-neutral-100">
      <div className="flex">
        <div className="w-1/12"/>
        <div className="w-8/12 mt-12">
          {Block}
        </div>
        <div className="w-2/12 mt-12">
          <Category/>
        </div>
        <div className="w-1/12"/>
      </div>
    </div>
  )
}