// src/lib/actions/clickOutside.js
export function clickOutside(node, { enabled = true, callback }) {
    const handleClick = (event) => {
        if (enabled && !node.contains(event.target)) {
            callback();
        }
    };

    document.addEventListener('click', handleClick, true);
    
    return {
        update({ enabled: newEnabled, callback: newCallback }) {
            enabled = newEnabled;
            callback = newCallback;
        },
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}