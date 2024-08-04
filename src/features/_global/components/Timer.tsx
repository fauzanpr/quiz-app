import { useAtom } from "jotai";
import { timerAtom } from "../store/timer";
import { useEffect } from "react";

function Timer() {
    const [timer, setTimer] = useAtom(timerAtom);
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(prev => prev - 1);
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [setTimer, timer]);

    return (
        <div className="bg-blue-600 text-white w-fit p-2 rounded-lg">
            <p className="text-lg">Waktu : {timer}</p>
        </div>
    );
}

export default Timer;
