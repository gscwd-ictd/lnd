import "../styles/tailwind.css";
import { Poppins } from "next/font/google";
import { RootContainer } from "@lms/components/osprey/root-container/view/RootContainer";
import { PageContent } from "@lms/components/osprey/page-content/view/PageContent";
import { Sidebar } from "@lms/components/osprey/navigations/sidebar/view/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Learning Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootContainer>
          <Sidebar />
          <PageContent>{children}</PageContent>
        </RootContainer>
      </body>
    </html>
  );
}
