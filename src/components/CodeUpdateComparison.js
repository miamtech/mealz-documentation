import React from 'react';

function CodeUpdateComparison({ oldVersion = "3.X", newVersion = "4.X", oldCode, newCode }) {
    return (
            <div>
                <h2>{oldVersion}</h2>
                <pre><code>{oldCode}</code></pre>
                <h2>{newVersion}</h2>
                <pre><code>{newCode}</code></pre>
            </div>
    );
}

export default CodeUpdateComparison;

