export type TextInputType = {
  /** The unique identifier for the input element (used for id and localStorage). */
  id: string;
  /** Placeholder text displayed inside the input when empty. */
  placeholder: string;
  /** Accessible label for screen readers describing the input's purpose. */
  ariaLabel: string;
  /** Whether the input is required for form submission. */
  required?: boolean;
  /** The maximum the amount of character allowed */
  maxLength?: number;
};

export type TextHeaderType = {
  /** The name of the header that will be displayed */
  headerText: string;
  /** Whether the input is required; if true, an asterisk will be shown. */
  required?: boolean;
  /** Add a custom classname */
  divClassName?: string;
  // The sub heading text that will be displayed */
  subHeaderText?: string;
};

export type SelectOptionType = {
  /** The unique identifier for the input element (used for id and localStorage). */
  id: string;
  /** Placeholder text displayed inside the input when empty. */
  placeholder: string;
  /** Accessible label for screen readers describing the input's purpose. */
  ariaLabel: string;
  /** Whether the input is required for form submission. */
  required?: boolean;

  options: string[];
};

export type TextAreaInputType = {
  /** The unique identifier for the input element (used for id and localStorage). */
  id: string;
  /** Placeholder text displayed inside the input when empty. */
  placeholder: string;
  /** Accessible label for screen readers describing the input's purpose. */
  ariaLabel: string;
  /** The number of rows that the text area has */
  rows: number;
  /** Whether the input is required for form submission. */
  required?: boolean;
  /** Weather the text area can be resized */
  resize?: boolean;
  /** The maximum length allowed */
  maxLength?: number;
};

export type CheckBoxOptionType = {
  /** The unique identifier for the input element (used for id and localStorage). */
  id: string;
  /** The name in the header text */
  headerText: string;
  /** Accessible label for screen readers describing the input's purpose. */
  ariaLabel: string;
  /** Whether the input is required for form submission. */
  required?: boolean;
  /** Whether the checkbox is on on line? */
  singleLine?: boolean;
  /** What happens on change */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Do you want to store the value in localStorage */
  localStorage?: boolean;
};

export type BookingPolicyModalType = {
  /** What happens when the close button is pressed? */
  onClose: () => void;
};

export type SubmitModalType = {
  /** What happens when the close button is pressed? */
  onClose: () => void;
};

export type UploadInputType = {
  /** The unique identifier for the input element. */
  id: string;
  /** The name in the header text */
  ariaLabel: string;
  /** Whether the input is required for form submission. */
  required?: boolean;
  /** The ref for the input */
  ref: React.RefObject<HTMLInputElement | null>;
  /** Whether you want multiple file uploads */
  multiple?: boolean;
  /** What happens on change */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type BookingButtonType = {
  /** Is the API call still in progress */
  isSending?: boolean;
};
