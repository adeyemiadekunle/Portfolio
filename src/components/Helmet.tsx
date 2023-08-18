
import { Helmet } from 'react-helmet-async'

const HelmetAsync = () => {
    return (
        <>
            <Helmet>
                <title>adeyemi.tech</title>
                <meta name="description" content="Adeyemi.tech is a portfolio website for Adeyemi Adekunle, a frontend developer based in Lagos, Nigeria." />
                <meta name="keywords" content="Adeyemi Adekunle, Adeyemi, Adekunle, frontend developer, frontend, developer, Lagos, Nigeria, React, Javascript, Typescript, HTML, CSS, Chakra_Ui, PandaCSS, Style Component, MaterialUI, Material UI, Material-UI, Adeyemi.tech, Adeyemi.tech portfolio, Adeyemi.tech portfolio website, Adeyemi.tech portfolio site" />
                <meta name="author" content="Adeyemi Adekunle" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#242424" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@iamadeyemidev" />
                <meta name="twitter:creator" content="@iamdeyemidev" />
                <meta name="twitter:title" content="adeyemi.tech" />
                <meta name="twitter:description" content="Adeyemi.tech is a portfolio website for Adeyemi Adekunle, a frontend developer based in Lagos, Nigeria." />
                <meta name="twitter:image" content="https://adeyemi.tech/images/adeyemi.tech.png" />
                <meta property="og:title" content="adeyemi.tech" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://adeyemi.tech" />
                <meta property="og:image" content="https://adeyemi.tech/images/adeyemi.tech.png" />
                <meta property="og:description" content="Adeyemi.tech is a portfolio website for Adeyemi Adekunle, a frontend developer based in Lagos, Nigeria." />
                <meta property="og:site_name" content="adeyemi.tech" />
                <meta property="og:locale" content="en_US" />
                <link rel="canonical" href="https://adeyemi.tech" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Helmet>
        </>
    )
}

export default HelmetAsync