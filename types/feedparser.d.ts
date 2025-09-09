declare module 'feedparser' {
    import { Transform } from 'stream';

    class FeedParser extends Transform {
        readable: boolean;
        on(event: 'readable', listener: (this: FeedParser) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'end', listener: () => void): this;
        read(): any;
    }

    export = FeedParser;
} 