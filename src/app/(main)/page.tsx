import Link from 'next/link';

const Main = () =>{
    return(
        
        <div>
            <div>
                Client space on building ...
            </div>
            <div>
                <Link href="/auth/login">Admin Login page</Link>
            </div>
            <div>
                <Link href="/admin/">Admin Space</Link>
            </div>
            
        </div>
    )
}

export default Main;