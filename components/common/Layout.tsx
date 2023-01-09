import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const menus = [
  { route: "/restaurant", name: "채식 식당" },
  { route: "/recipe", name: "채식 레시피" },
  { route: "/my-dictionary", name: "내 사전" },
];

export default function Layout({ children }: PropsWithChildren<{}>) {
  const router = useRouter();

  return (
    <div>
      <Header menus={menus} />
      {children}
      <Footer />
    </div>
  );
}
