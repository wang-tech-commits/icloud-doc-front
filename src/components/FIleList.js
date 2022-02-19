import React, {useState, useEffect, useRef} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {faMarkdown} from "@fortawesome/free-brands-svg-icons";
import PropTypes from 'prop-types';

const FIleList = ({files, onFileClick, onSaveEdit, onFileDelete}) => {
    const [editStatus, setEditStatus] = useState(0)
    const [value, setValue] = useState('')
    const closeEdit = (event) => {
        event.preventDefault()
        setEditStatus(0)
    }
    useEffect(() => {
        const handleInputEvent = (event) => {
            const {keyCode} = event
            if (keyCode === 13 && editStatus) {
                const editItem = files.find(file => file.id === editStatus)
                onSaveEdit(editItem.id, value)
                setEditStatus(0)
                setValue('')
            } else if (keyCode === 27 && editStatus) {
                closeEdit(event)
            }
        }
        document.addEventListener('keyup', handleInputEvent);
        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })
    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                    <li
                        className="list-group-item bg-light row d-flex align-items-center"
                        key={file.id}
                    >
                        {file.id !== editStatus &&
                        <>
                            <span className="col-2">
                                <FontAwesomeIcon size="lg" icon={faMarkdown}/>
                            </span>
                            <span className="col c-link" onClick={() => {
                                onFileClick(file.id)
                            }}>{file.title}</span>
                            <button
                                type="button"
                                className="icon-button col-1"
                                onClick={() => {
                                    setEditStatus(file.id)
                                    setValue(file.title)
                                }}
                            >
                                <FontAwesomeIcon title="编辑" icon={faEdit}/>
                            </button>
                            <button
                                type="button"
                                className="icon-button col-1"
                                onClick={() => {
                                    onFileDelete(file.id)
                                }}
                            >
                                <FontAwesomeIcon title="删除" icon={faTrash}/>
                            </button>
                        </>
                        }
                        {file.id === editStatus &&
                        <>
                            <div className="col-10">
                                <input
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                    }}
                                />
                            </div>
                            <button
                                type="button"
                                className="icon-button col-2"
                                onClick={closeEdit}
                            >
                                <FontAwesomeIcon title="关闭" size="lg" icon={faTimes}/>
                            </button>
                        </>
                        }

                    </li>
                ))
            }
        </ul>
    )
}

FIleList.propTypes = {
    files: PropTypes.array,
    onFileClick: PropTypes.func,
    onFileDelete: PropTypes.func,
    onSaveEdit: PropTypes.func,
}

export default FIleList;
