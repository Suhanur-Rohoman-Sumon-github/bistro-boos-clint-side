import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../shered/cover/Cover';
import benner2 from '../../assets/shop/banner2.jpg'
import useFilterData from '../../hook/useFilterData';
import useTitle from '../../hook/useTitle';
import TabData from '../../componnents/tabdata/TabData';
import { useParams } from 'react-router-dom';

const Order = () => {
    useTitle('bistro boos || Order')
    const catagories = ['Salad','pizza','soups','desserts','drinks']
    // console.log(catagories.indexOf())
    // const {catagory} =useParams()
    // const inisitalcatagory = catagories.indexOf(catagory)
    // console.log(inisitalcatagory)
    // const [tabIndex,setTabIndex] = (inisitalcatagory)
    const pizza = useFilterData('pizza')
    const salad = useFilterData('salad')
    const dessert = useFilterData('dessert')
    const soup = useFilterData('soup')
    const drinks = useFilterData('drinks')
    return (
        <>
            <Cover img={benner2} title='OUR SHOP' discription='Would you like to try a dish?'></Cover>
            <Tabs >
                <TabList className={'w-4/12 mx-auto'}>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabData items={salad}></TabData>
                </TabPanel>
                <TabPanel>
                    <TabData items={pizza}></TabData>
                </TabPanel>
                <TabPanel>
                    <TabData items={soup}></TabData>
                </TabPanel>
                <TabPanel>
                    <TabData items={dessert}></TabData>
                </TabPanel>
                <TabPanel>
                    <TabData items={drinks}></TabData>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Order;