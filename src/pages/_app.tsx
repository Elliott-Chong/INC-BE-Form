import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "@/utils/api";

import "@/styles/globals.css";
import PageLayout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className={`${inter.className} min-h-screen`}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
