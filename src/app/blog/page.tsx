
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '../../lib/contentful';

export default async function BlogPage() {
    const client = createClient();
    const entries = await client.getEntries({
        content_type: 'blogPost', // Content type ID (check Contentful dashboard)
        order: '-fields.date',
    });
    const posts = entries.items;

    return (
        <div className="w-full py-10 px-2 md:px-8 lg:px-16">
            <h1 className="text-3xl font-bold mb-8 text-orange-600">Blog Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => {
                    const { title, slug, description, date, coverImage } = post.fields;
                    return (
                        <div key={slug} className="bg-white rounded-lg shadow p-4 flex flex-col h-full">
                            {coverImage && coverImage.fields && coverImage.fields.file && (
                                <div className="mb-4">
                                    <Image
                                        src={coverImage.fields.file.url}
                                        alt={title}
                                        width={800}
                                        height={400}
                                        className="rounded w-full h-auto object-cover"
                                    />
                                </div>
                            )}
                            <Link href={`/blog/${slug}`} className="text-xl font-semibold text-green-700 hover:underline mb-2">
                                {title}
                            </Link>
                            <p className="text-gray-600 flex-grow">{description}</p>
                            <span className="text-xs text-gray-400 mt-2">{date}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
