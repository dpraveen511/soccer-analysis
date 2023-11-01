import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container mt-5">
            <header className="text-center mb-5">
                <h1>FootGame</h1>
            </header>

            <section className="text-center">
                <h2>Get Football Statistics</h2>
            </section>
            <section className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <button className="btn btn-primary btn-lg btn-block">
                            <img src="path/to/general_stats_icon.png" alt="General Stats Icon" className="mb-2"/>
                            General Stats
                        </button>
                    </div>
                    <div className="col-md-4 mb-4">
                        <button className="btn btn-primary btn-lg btn-block">
                            <img src="path/to/trend_queries_icon.png" alt="Trend Queries Icon" className="mb-2"/>
                            Trend Queries
                        </button>
                    </div>
                    <div className="col-md-4 mb-4">
                        <button className="btn btn-primary btn-lg btn-block">
                            <img src="path/to/sql_editor_icon.png" alt="SQL Editor Icon" className="mb-2"/>
                            SQL Editor
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
