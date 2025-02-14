import usePost from "../custom_hooks/PostData";
import { useState } from "react";

const PostData = () => {
    const { data, isPending, error, postData } = usePost('/api/users_post');  

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ name, email }); 
        setName('');
        setEmail('');
    };

    return (
        <div>
            <h1>Post User Details</h1>
            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />

                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />

                <button type="submit" disabled={isPending}>Add User</button>

                {isPending && <p>Posting data...</p>}
                {error && <p>Error: {error}</p>}
                {data && <p>User added successfully!</p>}
            </form>
        </div>
    );
};

export default PostData;
