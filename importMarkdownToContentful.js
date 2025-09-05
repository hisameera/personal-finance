const fs = require('fs');
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown');
const contentful = require('contentful-management');

// === CONFIGURATION ===
const SPACE_ID = '4mfvf56v6avr';
const ENVIRONMENT_ID = 'master'; // or your environment
const ACCESS_TOKEN = '3vj4H3yg57cNjozWEOLuhxWjok0fP_MfkWrc_M8tf6M';
const ENTRY_ID = '1fTy42mZBjTYVE6fylCotE'; // The entry you want to update
const FIELD_ID = 'body'; // The Rich Text field ID in your Contentful model
const MARKDOWN_PATH = './src/app/blog/itr1-illustration.md'; // Path to your markdown file

async function main() {
    // Read markdown file
    const markdown = fs.readFileSync(MARKDOWN_PATH, 'utf8');

    // Convert markdown to Contentful Rich Text
    const richText = await richTextFromMarkdown(markdown);

    // Connect to Contentful
    const client = contentful.createClient({ accessToken: ACCESS_TOKEN });
    const space = await client.getSpace(SPACE_ID);
    const env = await space.getEnvironment(ENVIRONMENT_ID);

    // Fetch entry and update Rich Text field
    const entry = await env.getEntry(ENTRY_ID);
    entry.fields[FIELD_ID] = { 'en-US': richText };
    await entry.update();
    await entry.publish();

    console.log('Content imported and published successfully!');
}

main().catch(console.error);
