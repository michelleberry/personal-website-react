import React from 'react';
import {useParams} from 'react-router-dom';
import { WorkTermOne } from './wtr_blog_arcticwolf';
import { WorkTermTwo } from './wtr_blog_ecobee';
import { WorkTermThree } from './wtr_blog_ecobee_pt2'

export default function WorkTermReport() {
    const { id } = useParams(); 
    if (id === "1") {
        return <WorkTermOne/>
    }
    if (id === "2") {
        return <WorkTermTwo/>
    }
    if (id === "3") {
        return <WorkTermThree/>
    }
}