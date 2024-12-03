"use client";

import { useRouter } from "next/navigation";

const DeleteConfirm = ({ isOpen, onClose, onDelete }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      // Call the provided onDelete function for delete operation
      await onDelete();

      onClose(); // Close the modal after deletion
      router.push(`/dashboard`); // Redirect to the dashboard or relevant page
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="w-full max-w-sm p-6 text-center text-white bg-black rounded-lg">
        <h2 className="mb-4 font-semibold text-14px">Confirm Deletion</h2>
        <p className="mb-6 text-12px">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-semibold bg-gray-600 rounded hover:bg-gray-700 text-12px"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 font-semibold bg-red-600 rounded text-12px hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
