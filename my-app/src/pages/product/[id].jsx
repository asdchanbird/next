import Image from "next/image";
import { Button } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Head from 'next/head';
export async function getStaticProps({params}) {
    const id = params.id
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return {
        props: {data}
    }
}
export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const paths = data.map((item)=> (
        {params: {id: item.id.toString()},}
    ))
    return {
        paths,fallback: false
    }    
}

export default function Product({data}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Product" />
                <meta name="description" content={data.description}/>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
            </Head>
            <div className="flex">
                
                <Image src={data.image} 
                alt={data.title} 
                width={300}
                height={300}
                priority={true}
                className="object-contain"
                />
                <div className="ml-5 mt-10">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="white" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="white"
                            href="/product"
                        >
                            Product
                        </Link>
                        <Typography color="white">產品{data.id}</Typography>
                    </Breadcrumbs>
                    <h1>{data.title}</h1>
                    <p className="mt-2">{data.description}</p>
                    <div className="mt-2 flex justify-between p-4">
                        <div>
                            Price : {data.price}
                        </div>
                        <div>
                            Rating : {data.rating.rate}
                        </div>
                    </div>
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </>
    )
}
