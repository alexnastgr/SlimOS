import "@/styles/modals.css";

import { type ConfirmModalProps } from "@/types/modals";

function Confirmation({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  icon,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-8 left-0 flex items-center justify-center">
      {/* Backdrop */}
      <div className="backDrop" onClick={onCancel} />

      {/* modal */}
      <div className="modal">
        {/* content */}
        <div className="px-6 pt-6 pb-5 text-center">
          {icon && <div className="mb-3 flex justify-center">{icon}</div>}

          <h2 className="text-[17px] font-semibold tracking-[-0.2px] text-black dark:text-white">
            {title}
          </h2>

          {message && (
            <p className="mt-1.5 text-[13px] leading-[18px] text-black/60 dark:text-white/60">
              {message}
            </p>
          )}
        </div>

        {/* actions */}
        <div className="flex border-t border-black/10 dark:border-white/10">
          <button
            type="button"
            onClick={onCancel}
            className="
              flex-1
              py-3
              text-[13px]
              font-medium
              text-black
              transition
              hover:bg-black/5
              active:bg-black/10
              dark:text-white
              dark:hover:bg-white/5
              dark:active:bg-white/10
            "
          >
            {cancelText}
          </button>

          <div className="w-px bg-black/10 dark:bg-white/10" />

          <button
            type="button"
            onClick={onConfirm}
            className="
              flex-1
              py-3
              text-[13px]
              font-semibold
              text-blue-500
              transition
              hover:bg-blue-500/5
              active:bg-blue-500/10
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
