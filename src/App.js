import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from "./components/FileSearch";
import FIleList from "./components/FIleList";
import defaultFiles from "./utils/defaultFiles";

function App() {
    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-3 left-panel">
                    <FileSearch
                        title='我的云文档'
                        onFileSearch={(e) => {
                            console.log(e);
                        }}
                    />
                    <FIleList
                        files={defaultFiles}
                    />
                </div>
                <div className="col-9 right-panel">
                    222
                </div>
            </div>
        </div>
    );
}

export default App;
