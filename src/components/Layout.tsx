import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background to-muted">
       <Header />
      
      <main className=" container mx-auto px-4 py-8 flex-1">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12">
        <div className="container mx-auto px-4 text-center text-dark gray-200">
          <p>Made by iHristoff</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
