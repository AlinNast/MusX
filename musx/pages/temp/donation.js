import Link from "next/link";
import Head from 'next/head';

export default function Donation() {
    return (
        <>
            <Head>
                <title>MusX Score</title>
                <meta name="description" content="Donations" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href='/'>
                <h1> A more elaborate donation page will be available when we believe we deserve one</h1>
            </Link>
        </>
    )
}