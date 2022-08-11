import { useCallback, useState } from "react";

export const KindsHooks = (initialValue = null, cb = null) => {
    const [value, setValue] = useState(initialValue);
    const listener = useCallback((val) => {
        setValue(val);
        if (cb) {
            cb('개인');
        }
    }, [value]);

    return [value, listener];
};