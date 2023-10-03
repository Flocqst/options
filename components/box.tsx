interface BoxProps {
  children: React.ReactNode;
  noLeftBorder?: boolean;
  noRightBorder?: boolean;
  noTopBorder?: boolean;
  noBottomBorder?: boolean;
}

export default function Box({
  children,
  noLeftBorder,
  noRightBorder,
  noTopBorder,
  noBottomBorder,
}: BoxProps) {
  return (
    <div
      style={{
        borderLeft: noLeftBorder ? 'none' : '1px solid #5d5555',
        borderRight: noRightBorder ? 'none' : '1px solid #5d5555',
        borderTop: noTopBorder ? 'none' : '1px solid #5d5555',
        borderBottom: noBottomBorder ? 'none' : '1px solid #5d5555',
        borderRadius: '0px', // Adjust the border radius as needed
        padding: '0px', // Adjust the padding as needed
        margin: '0px', // Adjust the margin as needed
      }}
    >
      {children}
    </div>
  );
}
