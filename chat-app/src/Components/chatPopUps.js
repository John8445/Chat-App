import { useState } from "react";
import './chatPopUps.css'

function FindAndCreate() {
    const [tab, setTab] = useState(1);
    return (
    <>
        <div id='FindAndCreate-container'>
            <div id='FindAndCreate-tab-container'>
                <div className={'FindAndCreate-tab' + (tab == 1 ? ' FindAndCreate-tab-active':'')} id='FindAndCreate-tab-1' onClick={() => {setTab(1)}}><p>Find Server</p></div>
                <div className={'FindAndCreate-tab' + (tab == 2 ? ' FindAndCreate-tab-active':'')} id='FindAndCreate-tab-2' onClick={() => {setTab(2)}}><p>Find Friend</p></div>
                <div className={'FindAndCreate-tab' + (tab == 3 ? ' FindAndCreate-tab-active':'')} id='FindAndCreate-tab-3' onClick={() => {setTab(3)}}><p>Create Server</p></div>
            </div>
            <div id='FindAndCreate-content-container'>
                {tab != 3 ? <>
                <div id="FindAndCreate-content-search-container">
                    <input type="text" id='FindAndCreate-search-box'></input>
                    <button id='FindAndCreate-search-btn'><span id='FindAndCreate-search-btn-text'>{tab == 1 ? "Find A Server" : "Find A Friend"}</span></button>
                </div>
                <div id="FindAndCreate-content-search-results">
                    
                </div>
                </> : <>
                <div id='FindAndCreate-create-container'>
                    <div id='FindAndCreate-create-server-container'>
                        <p className="FindAndCreate-create-server-text">Server Name</p>
                        <input type='text' id='FindAndCreate-serverName'></input>
                        <p className="FindAndCreate-create-server-text">Server Description</p>
                        <textarea id='FindAndCreate-serverDesc'></textarea>
                    </div>
                    <div id='FindAndCreate-create-photo-container'>
                        <div id='FindAndCreate-create-photo'>
                            
                        </div>
                        <div id='FindAndCreate-add-photo'>+</div>
                        <button id='FindAndCreate-create-btn'>Create</button>
                    </div>
                </div>
                
                </>}
            </div>
        </div>
    </>
    )
}

function EditProfile(){
    return (
    <>
        <FindAndCreate></FindAndCreate>
        <div id='EditProfile-container'>
            <div id='EditProfile-title-container'>
                Edit Profile
            </div>
            <div id='FindAndCreate-content-container'>
            <div id='FindAndCreate-create-container'>
                    <div id='FindAndCreate-create-server-container'>
                        <p className="FindAndCreate-create-server-text">Profile Description</p>
                        <textarea id='FindAndCreate-serverDesc'></textarea>
                    </div>
                    <div id='FindAndCreate-create-photo-container'>
                        <div id='EditProfile-create-photo'>
                            
                        </div>
                        <div id='EditProfile-add-photo'>+</div>
                        <button id='FindAndCreate-create-btn'>Create</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default EditProfile;