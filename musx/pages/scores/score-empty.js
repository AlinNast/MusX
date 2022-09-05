import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";


export default function EmptyScore() {
    return (
        <>
            <Head>
                <title>MusX Score</title>
                <meta name="description" content="Database of Score Sheets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Download and print theese empty scores and start writing music right away</h1>

            <Image
                src="/images/12-staves-without-clefs-blank-sheet-music.jpg"
                height={297}
                width={210}
                alt="Empty score" />

            <Link href='/'>
                <h1>
                    return home
                </h1>
            </Link>
        </>
    )
}