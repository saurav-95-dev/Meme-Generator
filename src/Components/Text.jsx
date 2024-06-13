import React, { useState } from "react";
import Draggable from 'react-draggable';
import '../App.css';

const Text = ({ initialText, color }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialText || "Double click to edit");

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setIsEditing(false);
        }
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        setIsEditing(true);
    };

    return (
        <Draggable>
            <div onDoubleClick={handleDoubleClick} onTouchEnd={handleTouchEnd}>
                {isEditing ? (
                    <textarea
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        autoFocus
                        style={{ color: color || '#000000', width: '100%', background: 'none', border: 'none', resize: 'none' }}
                    />
                ) : (
                    <h1 style={{ color: color || '#000000' }}>{value}</h1>
                )}
            </div>
        </Draggable>
    );
};

export default Text;
