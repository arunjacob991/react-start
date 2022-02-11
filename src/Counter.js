import { useEffect, useState } from "react";

export default function Counter () {

    const [windowwidth, setWindowwidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowwidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return(
        <div>
            Counter with windowwidth :  {windowwidth}
        </div>
    )
}