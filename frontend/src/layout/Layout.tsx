import Header from "../components/Header.tsx";
import {PropsWithChildren} from "react";

interface LayoutProps extends PropsWithChildren{}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;
