import localFont from "next/font/local";
import { Ubuntu_Sans } from 'next/font/google'

/* Open Sans Variable Font - through Google font API */
export const ubuntuSans = Ubuntu_Sans({
    subsets: ['latin'],
    display: 'swap',
});

/* TT OctoSquares Font Family - local font, non-variable. */
export const octoSquares = localFont({
    src: [
        {
            path: './fonts/TTOctosquaresCond-Medium.woff2',
            weight: '500',
        },
        {
            path: './fonts/TTOctosquaresCond-Regular.woff2',
            weight: '400',
        },
        {
            path: './fonts/TTOctosquaresCond-Thin.woff2',
            weight: '300',
        },
        {
            path: './fonts/TTOctosquaresCond-Light.woff2',
            weight: '200',
        },
        {
            path: './fonts/TTOctosquaresCond-XLight.woff2',
            weight: '100',
        },
    ]
})
