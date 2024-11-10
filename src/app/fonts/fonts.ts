import localFont from "next/font/local";

export const sfDisplay = localFont({
    src: [
        {
            path: './SFProDisplay-Thin.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: './SFProDisplay-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: './SFProDisplay-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './SF-Pro-Display-Semibold.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: './SFProDisplay-Bold.woff',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-sf-pro-display',
    display: 'swap',
});