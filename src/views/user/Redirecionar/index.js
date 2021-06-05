import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import Axios from 'axios';


function Child() {
    let { slug } = useParams();
    console.log(slug)
    const redirect = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/links/redirecionar', {
            slug: slug,
        }).then((response) => {
            if (response.data.error) {
                window.location.replace("./404")
            } else {
                window.location.replace(response.data.url);
            }
        });
    }
    redirect()
    return (
        <div></div>
    )
}
export default function Params() {
    return (
        <Router>
            <Switch>
                <Route path="/:slug" children={<Child />} />
            </Switch>
        </Router>

    );
}
