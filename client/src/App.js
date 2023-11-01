import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <header className="text-center mb-5">
                    <h1>FootGame</h1>
                </header>

                {/* <nav>
                    <ul className="nav justify-content-center mb-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/general-stats" className="nav-link">General Stats</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/trend-queries" className="nav-link">Trend Queries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sql-editor" className="nav-link">SQL Editor</Link>
                        </li>
                    </ul>
                </nav>
 */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/general-stats" element={<GeneralStatsPage />} />
                    <Route path="/trend-queries" element={<TrendQueriesPage />} />
                    <Route path="/sql-editor" element={<SQLEditorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

function HomePage() {
    return (
        <div>
            <section className="text-center">
                <h2>Get Football Statistics</h2>
            </section>

            <section className="d-flex justify-content-center mt-4">
                <div className="row">
                    {[
                        { path: "/general-stats", image: "home_tile1.png", alt: "General Stats Icon", text: "General Stats" },
                        { path: "/trend-queries", image: "home_tile2.png", alt: "Trend Queries Icon", text: "Trend Queries" },
                        { path: "/sql-editor", image: "home_tile3.png", alt: "SQL Editor Icon", text: "SQL Editor" }
                    ].map((item, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <Link to={item.path} className="btn btn-primary btn-lg btn-block d-flex flex-column align-items-center">
                                <img src={item.image} alt={item.alt} className="mb-2 image-size"/>
                                {item.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .image-size {
                    width: 180px;
                    height: 180px;
                    object-fit: contain;
                }
            `}</style>
        </div>
    );
}

function GeneralStatsPage() {
    return <div>General Stats Content Here</div>;
}

function TrendQueriesPage() {
    return (
        <div>
            <h2 className="text-center mb-5">Trending Football Queries</h2>
            <div className="button-container">
                <div className="row">
                    {["Player Performance", "Team Performance", "Player Market Value", "Clubs Performance", "Home & Away Performance", "Impact of Demographics"].map((query, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <button className="btn btn-info btn-lg btn-block">{query}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function SQLEditorPage() {
    return <div>SQL Editor Content Here</div>;
}

export default App;
