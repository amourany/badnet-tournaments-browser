// see https://react-svgr.com/docs/jest/
import * as React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
	'data-testid'?: string;
}

const SvgrMock = ({
	className, 'aria-hidden': ariaHidden, 'data-testid': dataTestId,
}: SvgProps) => <div
	aria-hidden={ariaHidden}
	className={className}
	data-testid={dataTestId}
/>;

export default SvgrMock;
export const ReactComponent = SvgrMock;
