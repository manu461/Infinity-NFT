import imageToBase64 from 'image-to-base64';
import { injectable } from 'inversify';

@injectable()
export default class HttpClient {
    public async fetchImage(tokenUri: string): Promise<string> {
        return await imageToBase64(tokenUri);
    }
}