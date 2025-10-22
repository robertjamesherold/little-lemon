import { Modal } from "./Modal";
import { Button } from "./Button";
import clsx from "clsx";

type AlertVariant = "info" | "success" | "warning" | "error";

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
};

export function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  variant = "info",
  title,
  children,
  confirmText = "OK",
  cancelText = "Abbrechen",
}: AlertDialogProps) {
  const variantColors = {
    info: "text-blue-600 border-blue-400",
    success: "text-green-600 border-green-400",
    warning: "text-yellow-600 border-yellow-400",
    error: "text-red-600 border-red-400",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      showFooter={false}
      size="sm"
    >
      <div
        className={clsx(
          "flex items-start gap-3 border-l-4 pl-3 py-2",
          variantColors[variant]
        )}
      >
        <div className="flex-1 text-gray-800 dark:text-gray-100">{children}</div>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          variant={variant === "error" ? "primary" : "primary"}
          onClick={onConfirm || onClose}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}