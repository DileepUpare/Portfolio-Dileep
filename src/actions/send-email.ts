import { Resend } from 'resend';

//import { env } from '../env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend('re_VpXMDomS_Aq7aiETNM14Kj4CSYbh76y2a');

export const sendEmail = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dileepupare8@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Something went wrong!`,
    };
  }
};
