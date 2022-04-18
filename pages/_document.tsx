import Document, { DocumentContext, DocumentInitialProps } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const protocol = ctx.req?.headers['x-forwarded-proto'] || 'http'
    const baseUrl = ctx.req ? `${protocol}://${ctx.req.headers.host}` : ''
    
    process.env.BASE_URL = baseUrl;

    return initialProps;
  }
}

export default CustomDocument;
