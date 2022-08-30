import Head from "next/head";

export default function CustomHead({ title, desc }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={`${desc}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}