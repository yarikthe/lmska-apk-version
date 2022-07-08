import React from 'react';
import DownloadList from "../components/download_list";

function MainPage() {
    return (
        <div className="App">
            <header className={"fixed-top shadow"}>
                <div className="container d-flex justify-content-between align-items-center">
                    <img src="https://lmska.com/assets/img/lmska_ua.png" alt="logo" className={"logo"} />
                    <div className="link d-flex">
                        <a href="https://yarikthe.github.io/lmska-api" className={"p-1"}>
                            Docs API
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <DownloadList />
            </main>
            <footer className={"fixed-bottom p-5"}>
                <hr/>
                <p>
                    Copyright © 2022 LMSka Study APK.
                </p>
            </footer>
        </div>
    );
}

export default MainPage;