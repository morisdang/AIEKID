import React, { useEffect, useRef } from "react";
import './scss/TextareaAutoSize.scss';

const TextareaAutoSize = ({ value, placeholder = "Title", handleOnchangeTexarea }) => {
    const textareaRef = useRef(null);

    // Adjust the height of the textarea on mount and when the value changes
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]); // Trigger when the value changes

    const changeTextarea = (e) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        if (handleOnchangeTexarea) {
            handleOnchangeTexarea(e.target.value);
        }
    };

    return (
        <textarea
            value={value}
            className="textarea-auto-size"
            placeholder={placeholder}
            onChange={changeTextarea}
            ref={textareaRef}
            disabled 
        />
    );
};

export default TextareaAutoSize;
