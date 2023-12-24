import "~/styles/globals.scss";
import type { AppProps as NextAppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "~/app/store";
import { useRouter } from "next/router";
import AppLayout from "~/components/layout/AppLayout";
import ToastLayout from "~/components/layout/ToastLayout";

import { NextIntlClientProvider } from "next-intl";
import NextApp from "next/app";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import theme from "~/utils/theme";
import { ThemeProvider } from "@mui/material";

export interface AppProps extends NextAppProps {
  messages: {};
  Component: any;
}

export default function App({ Component, pageProps, messages }: AppProps) {
  const router = useRouter();
  const regex =
    /^(?!.*(?:api|_next\/static|_next\/image|favicon\.ico|404|500|auth)).*/;
  const arr = router.pathname.split("/");
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <NextIntlClientProvider locale="en" messages={messages}>
            <ToastLayout>
              {arr.length > 1 && !regex.test(arr[1]) ? (
                <Component {...pageProps} />
              ) : (
                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              )}
            </ToastLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

App.getInitialProps = async function getInitialProps(context: any) {
  const { locale } = context.router;
  const messages = locale ? require(`messages/${locale}.json`) : undefined;

  return { ...(await NextApp.getInitialProps(context)), messages };
};
