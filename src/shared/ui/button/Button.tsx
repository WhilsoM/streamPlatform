type Button = {
	onClick: () => void
	color: 'red' | 'gray'
	children: React.ReactNode
}

export const Button = ({ onClick, color, children, ...props }: Button) => {
	return (
		<button onClick={onClick} className={`btn ${color}`} {...props}>
			{children}
		</button>
	)
}
