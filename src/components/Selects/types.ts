export interface IOption {
    value: string;
    label: string;
}

export interface MultiIOptionProps { 
    options: IOption[];
    currentOptions: string[];
    onChangeOptions: (value: string[]) => void;
    placeholder?: string;
}

export interface SingleIOptionProps {
    option: IOption[];
    currentOption: string;
    onChangeOption: (value: string) => void;
    placeholder?: string;
}

export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
