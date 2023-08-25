import Head from "next/head";
import Header from "./component/Header";
import Main from "./component/Main";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Yout!ube clone</title>
            </Head>  

            <main>
                <Header />
                <Main />
            </main>  
        </div>

    );
}

export default Home