// import { data } from "autoprefixer"
// import { GetServerSideProps } from "next"
import { useSelector } from "react-redux";
import { addTodo } from "@/store/slice/todo";
import Link from "next/link"
export async function getStaticProps() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    return {
        props: {data}   
    }
}

export default function Product({data}) {
    const todolist = useSelector(state => state.todo.todoList)
    console.log(todolist)
    console.log(data)
    return (
        <div>
            <h2>React Redux</h2>
            <div>
                {todolist.map((item)=> (
                    <h2>{item.name}</h2>
                ))}
            </div>
           {data.map((item)=> (
            <div className="flex" key={item.id}>
                <h2 className="mr-6">{item.title}</h2>
                <Link className="bg-blue-400 p-2 rounded-lg my-1" href={`/product/${item.id}`}>產品{item.id}</Link>
            </div>
           ))}
        </div>
    )
}
