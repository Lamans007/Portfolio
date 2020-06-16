import { useState } from 'react';




export default initialVal => {
    const [val, setValue] = useState(initialVal);
    const handleIncPriority = () => {
        setValue(val + 1);

    };
    const handleDecPriority = () => {
        setValue(val - 1);
    };

    return [val, handleIncPriority, handleDecPriority];
}