import './scss/PreviewFileUpLoad.scss';
import React, { useState, Fragment } from "react";
import { convertBase64 } from '../../../utils/CommonUtils'

const PreviewFileUpLoad = ({ play_game, isChooseFile, handleOnchange, previewImage }) => {
    const [preview, setPreview] = useState('');

    const handleOnchangeUploadFile = async (event) => {
        if (!isChooseFile) return;
        let base64 = await convertBase64(event);
        handleOnchange(base64, "base64");
    };

    const handleCheck = (e) => {
        if (!isChooseFile) {
            e.preventDefault();
        }
    };

    return (
        <Fragment>
            <div className="upload-file-container">
                <input 
                    id="upload-file-id" 
                    hidden 
                    className="form-control" 
                    onClick={(e) => handleCheck(e)} 
                    onChange={(e) => handleOnchangeUploadFile(e)} 
                    type="file" 
                />
                <label htmlFor="upload-file-id" className="label-preview-image">
                    <div 
                        className="preview-image"
                        style={{ backgroundImage: `url(${previewImage})` }}
                    ></div>
                    <button 
                        style={{ display: play_game ? "none" : "block" }} 
                        className="btn_upload-file-preview-image"
                    >
                        <label htmlFor="upload-file-id">Upload a picture</label>
                    </button>
                </label>
            </div>
        </Fragment>
    );
};

export default PreviewFileUpLoad;
