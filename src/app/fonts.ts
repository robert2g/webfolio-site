import { Ubuntu_Sans } from 'next/font/google'
import localFont from "next/font/local";
/* Ubuntu Sans Variable Font - through Google font API */
export const ubuntuSans = Ubuntu_Sans({
    subsets: ['latin'],
    display: 'swap',
});

/* Display Font for flavoring */

export const cutmark = localFont({
    src: [
        {
            path: './fonts/Cutmark-NrDemi.woff2',
            weight: '600',
            style: 'normal',
        },
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
        {
            path: './fonts/Cutmark-NrSuper.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
})