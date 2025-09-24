import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    let navigate = useNavigate();
    const { showAlert } = props;
    const handleSubmit = async (e) => {
        const host = "http://localhost:5000";
        e.preventDefault();
        // API CALLS
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, }),

        });

        const json = await response.json();
        console.log('usercraeted', json) // get auth-token in response

        if (json.success) {
            //save the auth-token and redirect
            localStorage.setItem('token', json.authtoken);
            showAlert("Account Created Successfully", "success")
            navigate("/") //to redirect to home page
        }

    }
    return (
        <div className='container'>
            <h2 className='my-3'>Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlfor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlfor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlfor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" required minLength={6} />
                </div>
                <div className="mb-3">
                    <label htmlfor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" required minLength={6} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
