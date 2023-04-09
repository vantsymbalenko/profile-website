import { FC, InputHTMLAttributes, forwardRef, ReactNode } from 'react';

import { StyledInput } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	ref?: React.Ref<HTMLInputElement>;
	isError?: boolean;
	errorMessage?: ReactNode;
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<StyledInput {...props} ref={ref} />
	)
);

Input.defaultProps = {
	ref: null,
	isError: false,
	errorMessage: null,
};
