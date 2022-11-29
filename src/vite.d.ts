declare module '*.md'{
    const attributes: Record<string, unknown>
    import React from 'react'
    const MDComponent: React.VFC
    export {attributes, MDComponent};
}