import {Link} from "react-router-dom";
import {useState} from "React";

export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Your Name"
                        value={name} onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder="abc@email.com"
                        value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password"
                        value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an account? <Link className="underline text-black" to={'/login'}>Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}