import React from 'react'
import {  fetchhh } from '@/utils/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
const People = ({container}:any) => {
    const router=useRouter();

    console.log(container);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
        {container?.map((el:any)=>(
            <div key={el.id}>
            <h1>{el.name}</h1>
            <h4>{el.username}</h4>
            <h2>{el.address.street}{el.address.suite}</h2>

          <Link  href={`/people/${el.id}`}>
            <button >Get Todos</button>
          </Link>
            </div>
        ))}
    </div>
  )
}

export default People;


export async function getStaticProps(){
    let container=await fetchhh();
    return {props:{container}};
    }