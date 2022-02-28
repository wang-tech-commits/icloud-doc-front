import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from "./components/FileSearch";
import FIleList from "./components/FIleList";
import BottomBtn from "./components/BottomBtn";
import {faPlus, faFileImport} from "@fortawesome/free-solid-svg-icons";
import defaultFiles from "./utils/defaultFiles";

function App() {
    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-1 col-xl-2 left-panel">
                </div>
                <div className="col-3 col-xl-3 left-panel">
                    <div className="button-margin">
                        <div className="row no-gutters">
                            <div className="col">
                                <BottomBtn
                                    text="新建"
                                    colorClass="btn-primary"
                                    icon={faPlus}
                                />
                            </div>
                            <div className="col">
                                <BottomBtn
                                    text="导入"
                                    colorClass="btn-success"
                                    icon={faFileImport}
                                />
                            </div>
                        </div>
                    </div>
                    <FileSearch
                        title='我的云文档'
                        onFileSearch={(e) => {
                            console.log(e);
                        }}
                    />
                    <FIleList
                        files={defaultFiles}
                        onFileClick={(id) => {
                            console.log(id)
                        }}
                        onFileDelete={(id) => {
                            console.log('1' + id)
                        }}
                        onSaveEdit={(id, newValue) => {
                            console.log(id)
                            console.log(newValue)
                        }}
                    />
                </div>
                <div className="col-8 col-xl-7 right-panel">
                </div>
            </div>
        </div>
    );
}

export default App;
