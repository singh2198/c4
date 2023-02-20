import React from 'react'
import { createpages } from '@/utils/api';
import { gettodos } from '@/utils/api';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { User } from '@/utils/types';

interface Details{
  re:User
}


const Singlepeople = ({re}:Details) => {


    return (
    <div>user id:{re.id}
          <h1>Todos Data</h1>
          {re.map((el:any)=>(
              <div  key={el.id}>{el.title}</div>
          ))}
    </div>
  )
}

export const getStaticPaths:GetStaticPaths=async()=> {
    let pp=await createpages();
    return {
      paths: pp.map((el:any)=>({params:{id:el.id.toString()}})),
      fallback: false, 
    }
  };

  
export const  getStaticProps:GetServerSideProps=async(context:any)=>{
    const {params:{id}}=context;
    const re=await gettodos(id);
    return{
        props:{re}
    } 
}


export default Singlepeople;