import Link from "next/link";
import { ModalProps } from "./types/types";

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
    return (
        <div className="flex flex-col h-screen w-full absolute top-0 left-0 ">
            <div className="m-auto text-2xl bg-gray-200 opacity-50 h-screen w-full">

            </div>
            <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-end">
                <div className="bg-white h-screen w-1/4 p-4">
                    <div className="relative flex justify-end pb-4">
                        <button className="text-2xl" onClick={() => setShowModal(prev => !prev)}>X</button>
                    </div>
                    <div className="border mb-4"></div>
                    <ul className="m-auto text-3xl" onClick={() => setShowModal(prev => !prev)}>
                        <Link href="/"><li className="pb-4">Home</li></Link>
                        <Link href="/about"><li className="pb-4">Experience</li></Link>
                        <Link href="/technologies"><li className="pb-4">Technologies</li></Link>
                        <hr />
                        <div className="flex justify-center pt-2">
                            Other Projects
                        </div>
                        <Link href="https://zen-torvalds-515ad2.netlify.app/"><li className="pt-4">Timezone Converter</li></Link>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Modal;