// useWinSize
import React, { useState, useEffect, useCallback } from 'react';

export default function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return size;
}

