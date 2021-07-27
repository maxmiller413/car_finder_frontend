import React from 'react'
// *** not working ***

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

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

export default DarkMode