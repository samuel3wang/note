import {useState, useEffect}  from "react";
import { Link } from "react-router-dom" 
import axios from 'axios';

// interface Category {
//     category: string;
// }

export default function Category() {
    const [category, setCategory] = useState<any>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let url :string = `${process.env.REACT_APP_goServer}/category`
        axios.get(url)
            .then(res => {
                setCategory(res.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    let arr: any[] = [];
    if (!loading){
        for (let i: number = 0; i < category.length; i++ ){
            arr.push(category[i].category)
        } 
    }
    
    return (
        <div>
            <p className="text-3xl font-semibold h-12">Categories</p>
            {arr.map((item) => (
                <li key={item} className="text-2xl">
                    <Link className="text-neutral-700" to={`/category/${item}`} >
                        {item}
                    </Link>
                </li>
            ))}         
        </div>
    )
}