

function layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h2 className="text-center text-amber-400">Signup now get 20% off</h2>
        {children}
    </div>
  )
}

export default layout