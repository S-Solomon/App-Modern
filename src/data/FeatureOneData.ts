import iconvector from '../assets/features1/iconvector.svg'
import iconcustomize from '../assets/features1/iconcustomize.svg'
import iconshortperiod from '../assets/features1/iconshortperiod.svg'
import { nanoid } from 'nanoid'

const FeatureOneData = [
    {
        id: nanoid(),
        img: iconvector,
        title: 'Vector Editing',
        text:
            'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
        id: nanoid(),
        img: iconcustomize,
        title: 'Customize & Monitoring',
        text:
            'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
        id: nanoid(),
        img: iconshortperiod,
        title: 'Quality & Short-period',
        text:
            'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
];

export default FeatureOneData;