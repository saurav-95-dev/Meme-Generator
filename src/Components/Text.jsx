import React, { useState, useRef } from "react";
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import '../App.css';

const Text = ({ initialText, color }) => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(initialText || "Double click to edit");
    const textRef = useRef(null);

    const handleDoubleClick = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValue(prevValue => prevValue + '\n');
        }
    };

    const handleBlur = () => {
        if (value.trim() === "") {
            setValue(initialText || "Double click to edit");
        }
        setEditMode(false);
    };

    const handleMouseUp = () => {
        const selection = window.getSelection();
        const selectedText = selection.toString();
        if (!selectedText) return;
        const newValue = value.replace(selectedText, '');
        setValue(newValue);
    };

    return (
        <Draggable>
            {
                editMode ? (
                    <textarea
                        ref={textRef}
                        autoFocus
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        onMouseUp={handleMouseUp}
                        style={{ color: color || '#000000' }}
                    />
                ) : (
                    <h1
                        ref={textRef}
                        onDoubleClick={handleDoubleClick}
                        style={{ color: color || '#000000' }}
                    >
                        {value}
                    </h1>
                )
            }
        </Draggable>
    );
}

Text.propTypes = {
    initialText: PropTypes.string,
    color: PropTypes.string
};

export default Text;
