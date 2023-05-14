import "../styles/tailwind.css";
import { Inter } from "next/font/google";
import { RootContainer } from "@lms/components/osprey/root-container/view/RootContainer";
import { PageContent } from "@lms/components/osprey/page-content/view/PageContent";
import { Sidebar } from "@lms/components/osprey/navigations/sidebar/view/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootContainer>
          <Sidebar />
          <PageContent>{children}</PageContent>
        </RootContainer>
      </body>
    </html>
  );
}
