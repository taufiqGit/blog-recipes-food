import Image from "next/image";
import Link from "next/link";

export default function CardBlog({ slug, title, thumb, serving }) {
    return (
        <section className="mx-auto w-10/12 py-3">
            <Image src={thumb}
                height={200}
                width={350}
                className="rounded" alt='imaage'/>
            <header className="text-xl font-Merriweather mt-3 text-[#000638] first-letter:uppercase">{title}</header>
            <p className="text-[#515151] text-sm mt-1 font-Merriweather">{serving}</p>
                <Link href={`/blog/${slug}`}>
                    <a className="text-[#000638] text-sm mt-4 block cursor-pointer">Read More...</a>
                </Link>
        </section>
    )
}