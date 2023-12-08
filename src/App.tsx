import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FeedScreen} from "./ui/screen/feed/FeedScreen";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <div className="container-fluid p-0">
                    <Routes>
                        <Route path="/" element={<FeedScreen />} />
                        <Route path="/feed" element={<FeedScreen />} />
                    </Routes>
                </div>
            </BrowserRouter>



        </div>
    );
}

export default App;
