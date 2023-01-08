import { useState } from "react";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";
import { UserProvider as AtlasUserProvider } from "../context/UserContext";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Marites - MongoDB Atlas Data API Demo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider>
        <AtlasUserProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colors: {
                  brand: [
                    "#68004A", // hightlight light
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#ED0064", // icon color dark
                    "#68004A", // btn-primary light
                    "#ED0064", // btn-hover light
                    "#68004A", // btn-primary dark
                    "#340230", // btn-hover, highlight dark
                  ],
                  // #ED0064, #68004A, #340230
                },
                primaryColor: "brand",
                colorScheme,
              }}
            >
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </AtlasUserProvider>
      </UserProvider>
    </>
  );
}
