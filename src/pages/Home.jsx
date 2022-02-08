import React, {useState,useEffect} from 'react';
import Paginator from '../components/Paginator';
import Table from '../components/Table';
import Input from '../components/Input';
import Select from '../components/Select';
import {getProducts} from '../services/products';
const Home = () => {
    const [data,setData]= useState([{}]);
    useEffect(
    ()=>{
      const renderProducts=async ()=>{
        const result=await getProducts(1,"name",-1);
        console.log(result);
        setData(result.docs);
      }

      renderProducts();
    },[]);

    

    console.log(getProducts(1,"name",-1));
   
    return (<>
        <Input id="nombre" type="text">Nombre</Input>
        <Select id="fabricantes" options={
            [
                {
                    value: "1",
                    label: "Fab1"
                },
                {
                    value: "2",
                    label: "Fab2"
                },
                {
                    value: "3",
                    label: "Fab3"
                }
            ]
        }>Fabricantes</Select>
        <Table data={data} orderField={(keyName)=>{alert(keyName)}} />
        <Paginator currentPage={1} finalPage={100} next={() => { alert("NEXT") }} prev={() => { alert("PREV") }} />
    </>);
};

export default Home;
