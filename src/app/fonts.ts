import { Ubuntu_Sans } from 'next/font/google'
import localFont from "next/font/local";
/* Ubuntu Sans Variable Font - through Google font API */
export const ubuntuSans = Ubuntu_Sans({
    subsets: ['latin'],
    display: 'swap',
});

/* Display Font for flavor */

export const cutmark = localFont({
    src: [
        {
            path: './fonts/Cutmark-NrBold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/Cutmark-NrXBold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
})