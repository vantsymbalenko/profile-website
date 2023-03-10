import { PropsWithChildren, forwardRef, ComponentPropsWithoutRef } from 'react';
import {
	Link as RouterLink,
	NavLink,
	LinkProps as RouterLinkProps,
	NavLinkProps,
} from 'react-router-dom';

import { StyledLink } from './styles';

type OwnProps = {
	withActiveState?: boolean;
	variant?: 'nav-link' | 'link';
};

type LinkProps = PropsWithChildren &
	NavLinkProps &
	RouterLinkProps &
	ComponentPropsWithoutRef<'a'> &
	OwnProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({ withActiveState, to, href, children, variant }, ref) => {
		if (withActiveState) {
			return (
				<StyledLink as={NavLink} to={to} variant={variant} ref={ref}>
					{children}
				</StyledLink>
			);
		}
		if (to) {
			return (
				<StyledLink as={RouterLink} to={to} ref={ref} variant={variant}>
					{children}
				</StyledLink>
			);
		}
		return (
			<StyledLink href={href} variant={variant} ref={ref}>
				{children}
			</StyledLink>
		);
	}
);

Link.displayName = 'Link';
Link.defaultProps = {
	withActiveState: false,
	variant: 'link',
};
