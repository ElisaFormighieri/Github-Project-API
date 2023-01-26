import { Link } from 'react-router-dom';

export function UnstyledLink({ children, ...rest }) {
  return (
    <Link
      {...rest}
      style={{
        all: 'unset',
        alignSelf: 'center',
        cursor: 'pointer',
      }}>
      {children}
    </Link>
  );
}
