"use client"

import { useState } from "react";
import Image from "next/image";

import UpgradeModal from "@components/modals/ProModal"; // import the modal

export default function ProCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-auto h-auto py-8 bg-hover rounded-xl">
      <div className="flex justify-center gap-4 mb-4">
        <div className="">
          <Image
            src="/assets/images/logo.svg"
            alt="Dimen Logo"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 font-semibold">
          <span className="text-white text-12px">Active Premium</span>
          <span className="opacity-50 text-10px text-gray">
            Unlock all features on Dimen
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="px-16 py-2 font-semibold text-white transition duration-300 ease-in-out bg-theme1 text-12px rounded-xl hover:bg-hover2"
        >
          Upgrade
        </button>
      </div>

      {/* Trigger the UpgradeModal */}
      <UpgradeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
