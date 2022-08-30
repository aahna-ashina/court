import { getDefaultProvider } from "ethers";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createClient, WagmiConfig } from "wagmi";
import Nation3Wrapper from "../components/Nation3Wrapper";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function Nation3({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Nation3Wrapper>
        <Head>
          <title>Nation3 Court</title>
        </Head>
        <Component {...pageProps} />
      </Nation3Wrapper>
    </WagmiConfig>
  );
}

export default Nation3;
