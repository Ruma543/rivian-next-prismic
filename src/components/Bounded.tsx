import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = 'section',
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx('px-5  md:px-5 lg:px-5 xl:px-7', className)}
      {...restProps}
    >
      <div className="mx-auto w-full ">{children}</div>
    </Comp>
  );
}
