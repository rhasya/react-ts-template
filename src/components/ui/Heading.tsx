import clsx from 'clsx';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function H1({ className, children }: HeadingProps) {
  return <h1 className={clsx(className, 'text-2xl font-bold')}>{children}</h1>;
}

export function H2({ className, children }: HeadingProps) {
  return <h2 className={clsx(className, 'text-xl font-bold')}>{children}</h2>;
}
