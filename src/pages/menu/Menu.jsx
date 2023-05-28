import React from 'react';
import Cover from '../shered/cover/Cover';
import benner from '../../assets/menu/banner3.jpg'
import useFilterData from '../../hook/useFilterData';
import MapData from '../../componnents/mapData/MapData';
import TextHeader from '../../componnents/textHeader/TextHeaders';
import chefimg from '../../assets/home/chef-service.jpg'
import Button from '../../componnents/button/Button';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const Menu = () => {
    useTitle('bistro boos || menu')
 const offerd = useFilterData('offered')
 const pizza = useFilterData('pizza')
 const salad = useFilterData('salad')
 const dessert =useFilterData('dessert')
 const soup =useFilterData('soup')

    return (
        <div>
            <section>
                <Cover img={benner} title='OUR MENU' discription='would you try a dush'></Cover>
            </section>
            <section className=' py-14'>
                <TextHeader  header="TODAY'S OFFER" subHeader="---Don't miss---" ></TextHeader>
                <MapData items={offerd}></MapData>
                <Link to={'/shop'}> <Button  title='ORDER YOUR FAVOURITE FOOD'></Button></Link>
            </section>
            <section className=' py-14'>
                <Cover img={chefimg} title='DESSERTS' discription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
                <MapData items={dessert}></MapData>
                <Link to={'/shop'}> <Button  title='ORDER YOUR FAVOURITE FOOD'></Button></Link>
            </section>
            <section className=' py-14'>
                <Cover img={chefimg} title='PIZZA' discription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
                <MapData items={pizza}></MapData>
                <Link to={'/shop'}> <Button  title='ORDER YOUR FAVOURITE FOOD'></Button></Link>
            </section>
            <section className=' py-14'>
                <Cover img={chefimg} title='SALADS' discription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
                <MapData items={salad}></MapData>
                <Link to={'/shop'}> <Button  title='ORDER YOUR FAVOURITE FOOD'></Button></Link>
            </section>
            <section className=' py-14'>
                <Cover img={chefimg} title='SOUPS' discription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
                <MapData items={soup}></MapData>
                <Link to={'/shop'}> <Button  title='ORDER YOUR FAVOURITE FOOD'></Button></Link>
            </section>
        </div>
    );
};

export default Menu;