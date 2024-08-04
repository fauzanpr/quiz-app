import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { questionsListAtom } from "@/features/quiz/store/questions";
import { calculateFilled } from "@/features/quiz/utils/calculateAnswer";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";

interface IProps {
    isOpen: boolean;
    setIsOpen: (cond: boolean) => void;
}

export function DialogConfirmation({ isOpen, setIsOpen }: IProps) {
    const navigate = useNavigate();
    const questionsList = useAtomValue(questionsListAtom);
    const submitHandler = () => {
        navigate("/end");
        localStorage.removeItem("ans");
    }
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Konfirmasi</DialogTitle>
                    <DialogDescription>
                        Apakah Anda yakin ingin mengakhiri kuis?
                        <p>Total jawab : { calculateFilled(questionsList || []) }</p>
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <button className="text-black px-4 py-2" onClick={() => setIsOpen(false)}>Batal</button>
                    <button className="bg-blue-700 text-white px-4 py-2" onClick={submitHandler}>Yakin</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
