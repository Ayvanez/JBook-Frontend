import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import BookListPage from "./components/book/BookListPage";
import {BookPage} from "./components/book/BookPage";

function App() {
    return (
        <Router>
            <div className={'App'}>
                <Switch>
                    <Route path={'/'} exact={true}><BookListPage/></Route>
                    <Route path={'/:book_id'}><BookPage/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
