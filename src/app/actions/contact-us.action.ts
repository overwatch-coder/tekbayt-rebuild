'use server'

import emailJs from '@emailjs/nodejs';
import { redirect } from 'next/navigation';

export const sendEmail = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const result = await emailJs.send(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, data, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    });

    if (result.status === 200) {
        redirect('/success?success=true')
    } else {
        redirect('/success?success=false')
    }
}