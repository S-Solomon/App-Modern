import { nanoid } from 'nanoid';
import skip from '../assets/testimonial/skip.png'
import shannon from '../assets/testimonial/shannon.png'
import tyson from '../assets/testimonial/tyson.png'
import denny from '../assets/testimonial/denny.png'

const TestimonialData = [
    {
        id: nanoid(),
        img: denny,
        title: 'Modern look & trending design',
        text:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer',
        avatar: '' ,
        name: 'Denny Hilguston',
        handle: '@denny.hil'
    },
    {
        id: nanoid(),
        title: 'Design Quality & performance',
        img: tyson,
        text:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer',
        avatar: '' ,
        name: 'Tyson Fury',
        handle: '@junglefury'
    },
    {
        id: nanoid(),
        img: shannon,
        title: 'Layout and organised layers',
        text:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer',
        avatar: '' ,
        name: 'Shannon Sharpe',
        handle: '@realshannon'
    },
    {
        id: nanoid(),
        img: skip,
        title: 'Modern look & trending design',
        text:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer',
        avatar: '' ,
        name: 'Skip Baylis',
        handle: '@skip.lis'
    },
];

export default TestimonialData;
