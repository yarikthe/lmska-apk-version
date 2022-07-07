import React from 'react';
import Download from "../components/download";

function MainPage() {
    return (
        <div className="App">
            <header className="header">
                <img src="https://lmska.com/assets/img/lmska_ua.png" alt="logo"/>
                <h1>LMSka Study APK Version Download</h1>
            </header>
            <main>
                <hr/>
                <div className="container">
                    <Download url={'/download/app-release-v1.8.1_build-7.apk'} title={"LMSka Study v.1.8.1 build:7"}/>
                    <Download url={'/download/app-release-v1.8.1_build-3.apk'} title={"LMSka Study v.1.8.1 build:3"}/>
                    <Download url={'/download/app-release-v1.7.10_build-7.apk'} title={"LMSka Study v.1.7.10 build:7"}/>
                    <Download url={'/download/app-release-v1.7.10_build-2.apk'} title={"LMSka Study v.1.7.10 build:2"}/>
                </div>
            </main>
            <footer>
                <hr/>
                <p>
                    Copyright © 2022 LMSka Study APK.
                </p>
            </footer>
        </div>
    );
}

export default MainPage;