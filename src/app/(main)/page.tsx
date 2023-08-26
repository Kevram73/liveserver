import Head from "next/head";
import Header from "@/app/(main)/component/Header";
import Main from "@/app/(main)/component/Main";
import Sidebar from "@/app/(main)/component/Sidebar";


const Home = () => {
    return (
        <div className="h-screen w-screen flex bg-gray-200">

            <Sidebar/>
            <div>
                <Main />
            </div>
            
            
        </div>

    );
}

export default Home