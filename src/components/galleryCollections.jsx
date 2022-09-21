export function getPiece(piece_id, year){
    const collection = getCollection(year)
    const idx = parseInt(piece_id)
    return collection[idx]
}

export function getCollection(year){
    switch (year) {
        case '2018':
            return art2018
        case '2019':
            return art2019
        case '2020':
            return art2020
        case '2021':
            return art2021
        case '2022':
            return art2022
        default: 
            return null
    }
}

export const art2018 = [
    {
        id: '0',
        title: "Mac Demarco",
        description: "A portrait I made of Mac Demarco because I was excited to go to his concert.",
        medium: "Holbein Acryla Gouache",
        image_url: "https://media.graphassets.com/HokI9JwYSgKLPZw83Fwg"
    },
    {
        id: '1',
        title: "Charlie in Bed",
        description: "An interesting drawing of my (late) dog.",
        medium: "Pen and Ink",
        image_url: "https://media.graphassets.com/0kBq9ifmQ7ix8DLP9sUx"
    },
    {
        id: '2',
        title: "Iyla",
        description: "I did this for an assignment in art class.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/6SBH0aAHSlRlEhghkZxA"
    },
    {
        id: '3',
        title: "Dog Portrait",
        description: "I was really proud of this dog.",
        medium: "Gouache",
        image_url: "https://media.graphassets.com/kLDSGGqnQvSdHP4O3uKA"
    },
    {
        id: '4',
        title: "Mathilda",
        description: "I really liked the movie Leon the Professional. In retrospect it's a pretty weird movie but I really like the outfits Natalie Portman wears.",
        medium: "Gouache",
        image_url: "https://media.graphassets.com/I0ZFsHlTbmRw0ECxjkLV"
    },
    {
        id: '5',
        title: "Silent Bob",
        description: "I thought the Jay and Silent Bob movies were really good I guess.",
        medium: "Holbein Acryla Gouache",
        image_url: "https://media.graphassets.com/eJkzOCZtRw6mqFv1MpjN"
    },
]

export const art2019 = [
    {
        id: '0',
        title: "Hamlet Kills Polonius",
        description: "I painted this for an english presentation in highschool. I referenced the Kenneth Branagh Hamlet movie.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/piqJx0jRWOe90M0ZrsVQ"
    },
    {
        id: '1',
        title: "Harry Potter",
        description: "Portrait of Daniel Radcliffe portraying Harry Potter from Harry Potter & the Philosophers Stone.",
        medium: "Holbein Acryla Gouache",
        image_url: "https://media.graphassets.com/0Uaz6eHnSKWcGrsjp4MM"
    },
    {
        id: '2',
        title: "Begging",
        description: "A sketch done in a lecture.",
        medium: "Pen and Ink",
        image_url: "https://media.graphassets.com/KdKnAohSCCNYfzuLJyqu"
    },
    {
        id: '3',
        title: "Billie Eilish",
        description: "A portrait of Billie Eilish; I liked her green hair.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/FpbZO7FOQfynvzujXrfl"
    },
]

export const art2020 = [
    {
        id: '0',
        title: "Orange Cat",
        description: "A portrait illustration of an orange cat.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/OzFGmyhTdaglZxFDiXEK"
    },
    {
        id: '1',
        title: "Timothee Chalamet",
        description: "A portrait of Timothee Chalamet.",
        medium: "Acrylic Paint, Holbein Acryla Gouache",
        image_url: "https://media.graphassets.com/TjYs8Qx1QouFpqiUny6T"
    },
    {
        id: '2',
        title: "Pastel Drawing",
        description: "I experimented with oil pastels.",
        medium: "Oil Pastel",
        image_url: "https://media.graphassets.com/UOYbWRQdTsaSNhjxz0Hw"
    },
    {
        id: '3',
        title: "Fountain Pen Drawing",
        description: "This was made during a period when I had an obsession with fountain ink pens.",
        medium: "Fountain Pen & Pink Ink",
        image_url: "https://media.graphassets.com/Ulwsi01Qxe01TBNC3Wv0"
    },
]

export const art2021 = [
    {
        id: '0',
        title: "Lydia Deetz",
        description: "I painted the girl from beetlejuice for a halloween project.",
        medium: "Acrylic Paint on Stone Paper",
        image_url: "https://media.graphassets.com/eH1FNbFVQfKOJYD3nupt"
    },
    {
        id: '1',
        title: "The Garden",
        description: "I painted one of my favourite bands.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/bHB4blKfTK6zrCnR3Ecg"
    },
    {
        id: '2',
        title: "Enya",
        description: "I painted one of my favourite people.",
        medium: "Acrylic Paint on Stone Paper",
        image_url: "https://media.graphassets.com/8kBwGDI4SvWFlEHEQ2nz"
    },
    {
        id: '3',
        title: "Face",
        description: "Self Portrait.",
        medium: "Acrylic Paint",
        image_url: "https://media.graphassets.com/eZLHOm0RWak63qf0hBHA"
    },
    {
        id: '4',
        title: "Mel",
        description: "I painted a youtuber that I like.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/Sz27WZ1zSFG6rSMgVoFE"
    },
    {
        id: '5',
        title: "Cat",
        description: "I painted a cat face.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/6rrD35u2RFyiuu539d52"
    },
    
]

export const art2022 = [
    {
        id: '0',
        title: "Bunny Hat",
        description: "A simple line drawing.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/N2o9HU3aSUSQSKmshXoa"
    },
    {
        id: '1',
        title: "Bestie Moment",
        description: "An illustration of me and my best friend.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/xdEDHrfReGuwLYGQZ5Fx"
    },
    {
        id: '2',
        title: "Untitled Sketch 1",
        description: "A sketch done in procreate.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/iZuIBGEgR1SB0iGaJLbC"
    },
    {
        id: '3',
        title: "Untitled Sketch 2",
        description: "A study of clothing and poses.",
        medium: "Digital Art (Procreate)",
        image_url: "https://media.graphassets.com/lzrhhD3GQ8yhm31rpwXf"
    },
]