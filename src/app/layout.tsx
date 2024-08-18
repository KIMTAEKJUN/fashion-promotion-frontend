import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/app/components/SessionProvider";
import { authOptions } from "@/app/utils/auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`h-full ${inter.className}`}>
        <SessionProvider session={session}>
          <div className="min-h-full">
            <main>{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
