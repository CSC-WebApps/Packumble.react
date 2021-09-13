import React, { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';

function Home(props) {

    const [username, setUsername] = useState(undefined);
    const [language, setLanguage] = useState(undefined);

    function match(event) {
        console.log({ username, language });
        const params = new URLSearchParams({username, language});
        window.location = `/match?${params.toString()}`;
        event.preventDefault();
    }

    return (
        <div className="container p-3 mt-5 page border rounded w-50">

            <h1>Packumble</h1>

            <p className="lead">Your team match making service! Just enter your information to get started.</p>

            <section className="p-3 border rounded" >
                <form onSubmit={match}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" name="username" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(event) => setUsername(event.target.value)} />
                    </div>

                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Favorite language</label>
                        <select className="form-select" id="inputGroupSelect01" name="language" value={language} onChange={(event) => setLanguage(event.target.value)}>
                            <option value="undefined">Choose...</option>
                            <option value="c#">c#</option>
                            <option value="python">python</option>
                            <option value="javascript">javascript</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-danger">Match!</button>
                </form>
            </section>

        </div>
    );
}

export default Home;
