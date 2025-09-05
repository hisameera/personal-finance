
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from '../../../lib/contentful';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const client = createClient();
    const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
        limit: 1,
    });
    const post = entries.items[0];
    if (!post) {
        notFound();
    }
    const { title, date, description, body, coverImage } = post.fields;
    const postTitle = typeof title === 'string' ? title : '';
    const postDate = typeof date === 'string' ? date : '';
    const postDescription = typeof description === 'string' ? description : '';
    // Check if body is a valid Contentful Rich Text Document
    const postBody = body && typeof body === 'object' && 'nodeType' in body && body.nodeType === 'document' ? body : null;
    // Check if coverImage is a valid Contentful Asset
    let imageUrl: string | null = null;
    if (
        coverImage &&
        typeof coverImage === 'object' && coverImage !== null &&
        'fields' in coverImage &&
        typeof coverImage.fields === 'object' && coverImage.fields !== null &&
        'file' in coverImage.fields &&
        typeof coverImage.fields.file === 'object' && coverImage.fields.file !== null &&
        'url' in coverImage.fields.file &&
        typeof coverImage.fields.file.url === 'string'
    ) {
        imageUrl = coverImage.fields.file.url;
    }

    return (
        <div className="w-full py-10 px-2 md:px-8 lg:px-32">
            <div className="bg-white rounded-lg shadow p-8">
                <h1 className="text-3xl font-bold mb-4 text-orange-600">{postTitle}</h1>
                {postDate && <p className="text-gray-500 mb-2">{postDate}</p>}
                {postDescription && <p className="text-green-700 mb-6">{postDescription}</p>}
                {imageUrl && (
                    <div className="mb-6">
                        <Image
                            src={imageUrl}
                            alt={typeof postTitle === 'string' ? postTitle : ''}
                            width={1200}
                            height={500}
                            className="rounded w-full h-auto object-cover"
                        />
                    </div>
                )}
                {postBody && (
                    <article className="prose prose-lg max-w-none">
                        {documentToReactComponents(postBody as any)}
                    </article>
                )}
            </div>
        </div>
    );
}
