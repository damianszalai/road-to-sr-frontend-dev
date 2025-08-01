// 07-performance-ssr-vs-csr/src/app/ssr/layout.tsx

const SsrLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default SsrLayout;
