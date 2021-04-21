import React from 'react'

function DarkMode ({onToggleDarkMode, isDarkMode}){
    return (
        <>
            <p>{isDarkMode ? 'dark mode' : 'not dark mode'}</p>
            <label class="switch" onClick={() => onToggleDarkMode()}>
                <input type="checkbox" {...isDarkMode ? 'checked' : ''} />
                <span class="slider round"></span>
            </label>
        </>
    )
}

export default DarkMode