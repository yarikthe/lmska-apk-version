import React from 'react';
import Download from "./download";

function DownloadList() {
    return (
        <div className="container">
            <div className="col-sm-8 m-auto ">
                <h1 className={"lead1"}>LMSka Study APK Version Download</h1>
                <br/>
                <h2>Version</h2>
                <hr/>
            </div>
            <Download url={'/lmska-apk-version/download/app-release-v1.8.2_build-3.apk'} title={"LMSka Study v.1.8.2 build:3"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.8.2_build-2.apk'} title={"LMSka Study v.1.8.2 build:2"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.8.1_build-10.apk'} title={"LMSka Study v.1.8.1 build:10"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.8.1_build-7.apk'} title={"LMSka Study v.1.8.1 build:7"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.8.1_build-3.apk'} title={"LMSka Study v.1.8.1 build:3"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.7.10_build-7.apk'} title={"LMSka Study v.1.7.10 build:7"}/>
            <Download url={'/lmska-apk-version/download/app-release-v1.7.10_build-2.apk'} title={"LMSka Study v.1.7.10 build:2"}/>
        </div>
    );
}

export default DownloadList;