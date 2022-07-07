import React from 'react';

function Download(props) {
    return (
        <div className="col-sm-8 m-auto">
            <div className="card m-2 shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.url} className="btn btn-primary" download>
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Download;