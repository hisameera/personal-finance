
import { createClient as contentfulCreateClient } from 'contentful';

export function createClient() {
    return contentfulCreateClient({
        space: '4mfvf56v6avr',
        accessToken: '3vj4H3yg57cNjozWEOLuhxWjok0fP_MfkWrc_M8tf6M',
    });
}
