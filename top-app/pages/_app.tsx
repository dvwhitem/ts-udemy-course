import '../styles/globals.css'
import {Fragment} from 'react'
import Head from 'next/head'

function MyApp({Component, pageProps}: any): JSX.Element {
    return (<Fragment>
        <Head>
            <title>Top App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                  rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </Fragment>
)
}

export default MyApp
