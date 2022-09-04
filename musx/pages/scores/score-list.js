import Link from "next/link";

export default function ScoreList() {
    return (
        <>
            <Link href="/">MusX</Link>
                <h1>Take a look at all the scores we have</h1>

            <ul>
                <Link href='/scores/score-empty'>
                    <li>Empty sheets for writing!</li>
                </Link>
            </ul>

        </>
    )
}