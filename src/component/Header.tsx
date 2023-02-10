import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="h-64 flex items-center justify-center bg-sky-100 w-screen">
      <Link to = "/">
        <h1 className="text-7xl text-center text-black title-font">
          Samuel's Notes
        </h1>
      </Link>
    </div>
  )
}