import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";


export default function ScoreList() {
    return (
        <Layout>
            <Head>
                <title>MusX Score</title>
                <meta name="description" content="Database of Score Sheets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div >
            <Link href="/"> MusX </Link>
            <h1>Take a look at all the scores we have</h1>

            <ul>
                <Link href='/scores/score-empty'>
                    <li>Empty sheets for writing!</li>
                </Link>
            </ul>
            </div>
        </Layout>
    )
}