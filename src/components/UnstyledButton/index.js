export function UnstyledButton({ children, ...rest }) {
  return (
    <button
      {...rest}
      style={{
        all: 'unset',
      }}>
      {children}
    </button>
  );
}
