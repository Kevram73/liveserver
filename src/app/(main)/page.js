import Head from "next/head";
import Header from "@/app/(main)/component/Header";
import Main from "@/app/(main)/component/Main";
import Sidebar from "@/app/(main)/component/Sidebar";


const Home = () => {
    return (
       <main>
        <Main/>
        <Header/>
       </main>
    );
}

export default Home