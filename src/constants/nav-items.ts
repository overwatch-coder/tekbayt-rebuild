import { NavLinkType } from "@/types";
import home from "@/assets/icons/home.png";
import services from "@/assets/icons/services.png";
import our_work from "@/assets/icons/our_work.png";
import about_us from "@/assets/icons/about_us.png";
import contact_us from "@/assets/icons/contact_us.png";

export const navLinks: NavLinkType[] = [
    { name: 'Home', url: '/', icon: home },
    { name: 'Services', url: '/services', icon: services },
    { name: 'Our Work', url: '/our-work', icon: our_work },
    { name: 'About Us', url: '/about-us', icon: about_us },
    { name: 'Contact Us', url: '/contact-us', icon: contact_us },
]