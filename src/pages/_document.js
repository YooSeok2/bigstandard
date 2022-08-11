import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitalProps (ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } catch (error) {
            console.error(error);
        } finally {
            sheet.seal();
        }
    }

    render () {
        return (
            <Html>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name="description" content="큰손들은 종목을 어떻게 분석할까? 실적, 추정, 수급, 기술적 분석 기반의
                    알고리즘을 통해 검증된 종목을 알려드립니다." />
                    <meta name="keywords" content="주식, 투자, 주식강좌, 주식상담, 주식투자, 시세, 주가상승종목추천,
                    투자도움, 주식프로그램, 주식정보, 주식분석프로그램" />
                    <meta property="og:title" content="큰손정석"></meta>
                    <meta property="og:site_name" content="큰손정석"></meta>
                    <meta
                        property="og:description"
                        content="큰손들은 종목을 어떻게 분석할까? 실적, 추정, 수급, 기술적 분석 기반의 알고리즘을 통해 검증된 종목을 알려드립니다."
                    />
                    <meta name="apple-mobile-web-app-title" content="큰손정석"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
