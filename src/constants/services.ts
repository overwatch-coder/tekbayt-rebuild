import { ServiceType } from "@/types";
import digital_marketing from '@/assets/services/digital_marketing.png'
import design_team from '@/assets/services/design_team.png'
import developers from '@/assets/services/developers.png'
import brand_managers from '@/assets/services/brand_managers.png'

export const services: ServiceType[] = [
    {
        id: 'design-team',
        image: design_team,
        name: 'Design Service',
        desc: 'We take ownership full responsibility and ownership giving your business by giving it  the best aesthetics well as a wonderful experience that project a level of growth and development that would wow you.',
        features: ['UI/UX design', 'Logo design', 'Interactive design', 'Graphics design']

    },
    {
        id: 'digital-marketing',
        image: digital_marketing,
        name: 'Digital Marketing',
        desc: 'we take ownership full responsibility and ownership giving your business by giving it the best aesthetics well as a wonderful experience that project a level of growth and development that would wow you',
        features: ['Social media marketing', 'Email marketing', 'Search Engine Optimization', 'Content marketing', 'SMS marketing']
    },
    {
        id: 'developers',
        image: developers,
        name: 'Mobile App/Web Developement',
        desc: 'Digital transition of of products and services has helped solve more problems and has also improved the availability of products to the public (target). our team aims to help you build digital products that helps you solve world problems with the following services.',
        features: ['Web Design / Web Development', 'Web App Development', 'Mobile App Development', 'iOS App Development']
    },
    {
        id: 'brand-managers',
        image: brand_managers,
        name: 'Brand Management',
        desc: 'Brand management is one of the important part of business growth and development. our team is set out to build a unique image for your business that will set it out on a path for growth with our amazing services.',
        features: ['Brand Extension', 'Brand Licensing', 'Product Extension']
    },
]