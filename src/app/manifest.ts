import { SITE } from "@/constants/site";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${SITE.name} — Portfolio`,
    short_name: SITE.name.split(" ")[0],
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#00C6FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
