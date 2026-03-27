'use client';
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
const Header: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="flex w-full border border-black-900 border-t-0 border-l-0 border-r-0 border-b-2 pb-4">
                <div className="flex">
                    <Image src="/email.svg" alt="Description" width={35} height={35} />
                    <div className="ml-2 text-2xl font-bold">hopkinskeyairius@gmail.com</div>
                </div>
                <div className="ml-auto text-2xl" onClick={() => setShowModal(true)}>
                    <Image src="/hamburger-menu.svg" alt="Description" width={30} height={30} />
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>)
}

export default Header;