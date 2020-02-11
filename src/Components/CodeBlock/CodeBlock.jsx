import React from 'react';
import PropTypes from 'prop-types';

import {
	CodeBlockWrapper,
	CodeBlockCode,
} from './CodeBlock.styles.js';

const CodeBlock = props => {
	return (
		<CodeBlockWrapper>
			<CodeBlockCode>
				{props.children}
			</CodeBlockCode>
		</CodeBlockWrapper>
	);
};

CodeBlock.propTypes ={
	children: PropTypes.node,
};

CodeBlock.defaultProps = {
	children: <div />,
};

export default CodeBlock;