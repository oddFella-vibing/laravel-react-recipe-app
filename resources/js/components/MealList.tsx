import {EmblaOptionsType} from 'embla-carousel'
import React from "react";
import EmblaCarousel from './EmblaCarousel';
import { usePage } from '@inertiajs/react';
import { MealProps } from '@/propTypes';

const OPTIONS: EmblaOptionsType = {loop:true}
// const SLIDE_COUNT = 10
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const MealList = () => {
    const {meallist}:any =usePage().props;
   
    return (
        <>
       
            <EmblaCarousel slides={meallist} options={OPTIONS} />
        </>
    );
};

export default MealList;
